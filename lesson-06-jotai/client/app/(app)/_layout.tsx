import { Redirect, Stack } from 'expo-router'
import { useAtomValue } from 'jotai'
import { authAtom } from '../../entities/auth/model/auth.state'

export default function AppLayout() {
	const { access_token } = useAtomValue(authAtom)
	if (!access_token) {
		return <Redirect href='/auth/login' />
	}

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' />
		</Stack>
	)
}
