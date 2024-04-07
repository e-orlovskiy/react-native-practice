import { useFonts } from 'expo-font'
import { Link, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
SplashScreen.preventAutoHideAsync()

export default function App() {
	const [fontLoaded, fontError] = useFonts({
		BalsamicRegular: require('../../assets/fonts/BalsamiqSans-Regular.ttf'),
		BalsamicBold: require('../../assets/fonts/BalsamiqSans-Bold.ttf'),
		BalsamicItalic: require('../../assets/fonts/BalsamiqSans-Italic.ttf'),
		BalsamicBoldItalic: require('../../assets/fonts/BalsamiqSans-BoldItalic.ttf')
	})

	useEffect(() => {
		if (fontLoaded) {
			SplashScreen.hideAsync()
		}
	}, [fontLoaded])

	if (!fontLoaded) return null

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.text}>Hello, it's index in (app) folder</Text>
				<Link style={styles.link} href='/notes/anfasdfay'>
					Link
				</Link>
				<StatusBar />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#39425C',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 20,
		fontFamily: 'BalsamicRegular',
		color: '#fff'
	},
	link: {
		fontSize: 26,
		fontFamily: 'BalsamicBold',
		color: '#FF7A2E'
	}
})
