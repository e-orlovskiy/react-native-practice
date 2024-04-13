import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { API } from '../api/api'
import { IAuthResponse, ILoginRequest } from './auth.model'

export interface AuthState {
	access_token: string | null
	isLoading: boolean
	error: string | null
}

const storage = createJSONStorage<AuthState>(() => AsyncStorage)

export const authAtom = atomWithStorage(
	'auth',
	{
		access_token: null,
		isLoading: false,
		error: null
	},
	storage
)

// методы get и set позволяют получать и устанавливать данные в атом
export const loginAtom = atom(
	get => get(authAtom),
	async (_get, set, { email, password }: ILoginRequest) => {
		set(authAtom, {
			isLoading: true,
			access_token: null,
			error: null
		})
		try {
			const { data } = await axios.post<IAuthResponse>(API.login, {
				email,
				password
			})
			set(authAtom, {
				isLoading: false,
				access_token: data.access_token,
				error: null
			})
		} catch (error) {
			console.error('Error occurred while logging in:', error)
			let errorMessage = 'Something went wrong.'
			if (axios.isAxiosError(error) && error.response) {
				const responseData = error.response.data
				if (typeof responseData === 'string') {
					// Если сервер возвращает только текст ошибки
					errorMessage = responseData
				} else if (responseData && responseData.message) {
					// Если сервер возвращает объект с ключом 'message'
					errorMessage = responseData.message
				}
			}
			set(authAtom, {
				isLoading: false,
				access_token: null,
				error: errorMessage
			})
		}
	}
)

export const logoutAtom = atom(null, (_get, set) => {
	set(authAtom, {
		access_token: null,
		isLoading: false,
		error: null
	})
})
