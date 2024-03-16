import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import { Input } from './components/Input'
import { Colors } from './designTokens/designTokens'

const width = Dimensions.get('window').width

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello World</Text>
			<View style={styles.container2}>
				<View style={styles.block}></View>
				<View style={styles.block}></View>
				<View style={styles.block}></View>
			</View>

			<View style={styles.form}>
				<View style={styles.emailContainer}>
					<Input placeholder='email' />
				</View>
				<View style={styles.passContainer}>
					<Input isPassword placeholder='password' />
				</View>
				{/* <Button style={styles.loginBtn} title='login' /> */}
				<Button title='login' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
		flex: 1,
		flexDirection: 'column',
		backgroundColor: Colors.secondary,
		alignItems: 'center'
	},
	text: {
		fontSize: 40,
		color: 'white',
		fontWeight: 'bold'
	},
	container2: {
		backgroundColor: 'black',
		marginTop: 40,
		flexDirection: 'row',
		height: 150,
		width: '100%',
		borderStyle: 'solid',
		borderColor: 'white',
		borderWidth: 5,
		gap: 5
	},
	block: {
		backgroundColor: 'white',
		height: 100,
		width: width / 3 - 5
		// flex: 3
	},
	form: {
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center'
	},
	emailContainer: {
		width: '100%'
	},
	passContainer: {
		position: 'relative',
		width: '100%'
	},
	loginBtn: {}
})
