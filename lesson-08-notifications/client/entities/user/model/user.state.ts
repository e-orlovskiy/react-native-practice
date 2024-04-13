import axios from 'axios'
import { atom } from 'jotai'
import { authAtom } from '../../auth/model/auth.state'
import { API } from '../api/api'
import { IUser } from './user.model'

export interface IUserState {
	profile: IUser | null
	isLoading: boolean
	error: string | null
}

// описываем начальное состояние атома jotai
export const profileAtom = atom<IUserState>({
	profile: null,
	isLoading: false,
	error: null
})

export const loadProfileAtom = atom(
	async get => get(profileAtom),
	async (get, set) => {
		const { access_token } = await get(authAtom)
		set(profileAtom, { isLoading: true, error: null, profile: null })
		try {
			const { data } = await axios.get<IUser>(API.profile, {
				headers: { Authorization: `Bearer ${access_token}` }
			})
			set(profileAtom, {
				isLoading: false,
				profile: data,
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
			set(profileAtom, {
				isLoading: false,
				profile: null,
				error: errorMessage
			})
		}
	}
)
