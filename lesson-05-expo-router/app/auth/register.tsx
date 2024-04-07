import { Link, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function Register() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello, it's register page</Text>
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
