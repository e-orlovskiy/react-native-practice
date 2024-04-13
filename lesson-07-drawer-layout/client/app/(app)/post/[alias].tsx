import { SplashScreen, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../shared/css_tokens'

SplashScreen.preventAutoHideAsync()

export default function NotesPage() {
	const { alias } = useLocalSearchParams()
	return (
		<View>
			<Text>Hello, it's notes page for alias: {alias}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 20,
		fontFamily: 'BalsamicRegular',
		color: '#fff'
	}
})
