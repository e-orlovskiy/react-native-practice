import { Link, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function Login() {
	return (
		<View style={styles.container}>
			{/* <Stack.Screen
				options={{
					title: 'any title',
					statusBarColor: '#39425C'
				}}
			/> */}

			<Text style={styles.text}>Hello, it's login page</Text>
			<Link href='/notes'>Link</Link>
			<StatusBar style='auto' />
		</View>
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
	}
})
