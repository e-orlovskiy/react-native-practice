import { Link } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function unmatchedRoute() {
	return (
		<View style={styles.container}>
			<Image source={require('../assets/error-404.png')} style={styles.image} />
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
		fontFamily: 'BalsamicRegular',
		textAlign: 'center',
		color: '#fff'
	},
	link: {
		fontSize: 26,
		fontFamily: 'BalsamicBold',
		color: '#FF7A2E'
	}
})
