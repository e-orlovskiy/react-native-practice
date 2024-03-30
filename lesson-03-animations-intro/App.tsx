import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton } from './src/components/CustomButton'

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Animation testing</Text>
			<CustomButton text='Кнопка' onPress={() => {}} />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 24,
		marginBottom: 20
	}
})
