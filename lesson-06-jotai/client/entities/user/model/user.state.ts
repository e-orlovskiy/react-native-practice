import { atom } from 'jotai'
import { IUser } from './user.model'

export interface IUserState {
	profile: IUser | null
	isLoading: boolean
	error: string | null
}

// описываем начальное состояние атома jotai
export const profileAtom = atom<IUserState>({
	profile: {
		id: '1',
		name: 'John',
		surname: 'Doe',
		nickname: 'johndoe',
		email: 'johndoe@com'
	},
	isLoading: false,
	error: null
})
