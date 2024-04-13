import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
export default function RootLayout() {
	const [fontLoaded, fontError] = useFonts({
		BalsamiqRegular: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
		BalsamiqBold: require('../assets/fonts/BalsamiqSans-Bold.ttf'),
		BalsamiqItalic: require('../assets/fonts/BalsamiqSans-Italic.ttf'),
		BalsamiqBoldItalic: require('../assets/fonts/BalsamiqSans-BoldItalic.ttf')
	})
	useEffect(() => {
		if (fontLoaded) {
			SplashScreen.hideAsync()
		}
	}, [fontLoaded])

	if (!fontLoaded) return null

	return (
		<>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='auth/restore'
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
