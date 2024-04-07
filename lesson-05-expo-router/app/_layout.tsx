import { Stack } from 'expo-router'
import { Text } from 'react-native'
export default function RootLayout() {
	return (
		<>
			<Text>fasd</Text>
			<Stack>
				<Stack.Screen
					name='(app)/index'
					options={{
						// statusBarColor: 'black',
						statusBarStyle: 'dark',
						headerShown: false
					}}
				/>
				<Stack.Screen name='auth/login' />
			</Stack>
		</>
	)
}
