import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Colors } from '../shared/css_tokens'

SplashScreen.preventAutoHideAsync()
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
		<SafeAreaProvider>
			<Stack
				screenOptions={{
					headerShown: false,
					statusBarColor: Colors.pink
				}}
			>
				<Stack.Screen name='auth/restore' />
				<Stack.Screen name='auth/login' />
			</Stack>
		</SafeAreaProvider>
	)
}
