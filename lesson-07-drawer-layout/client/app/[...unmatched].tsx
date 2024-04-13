import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function unmatchedRoute() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Упс... Такой страницы не существует, попробуйте вернуться на главную
				страничку
			</Text>
			<Link style={styles.link} href='/'>
				Главная
			</Link>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#39425C',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: 'contain'
	},
	text: {
		fontSize: 18,
		fontFamily: 'BalsamiqRegular',
		textAlign: 'center',
		color: '#fff'
	},
	link: {
		fontSize: 26,
		fontFamily: 'BalsamiqBold',
		color: '#FF7A2E'
	}
})
