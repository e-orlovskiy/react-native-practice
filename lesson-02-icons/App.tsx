import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import TestIcon from './assets/svg-icons/testImg'

export default function App() {
	return (
		<View style={styles.container}>
			<TestIcon />
			<FontAwesomeIcon icon={faMugSaucer} size={95} color='orange' />
			<Text>Open up App.tsx to start working on your app!</Text>
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
	}
})
