import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { Colors } from '../css_tokens'

export function CustomInput({
	isPassword,
	...props
}: TextInputProps & { isPassword?: boolean }) {
	return (
		<View style={styles.inputContainer}>
			{!isPassword && (
				<FontAwesomeIcon icon={faUser} style={styles.icon} size={22} />
			)}
			{isPassword && (
				<FontAwesomeIcon icon={faLock} style={styles.icon} size={22} />
			)}
			<TextInput
				style={styles.input}
				placeholderTextColor={Colors.pink}
				{...props}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		position: 'relative'
	},
	input: {
		paddingVertical: 15,
		paddingHorizontal: 42,
		backgroundColor: Colors.gray,
		borderRadius: 10,
		fontSize: 20,
		color: 'white',
		fontFamily: 'BalsamiqRegular'
	},
	icon: {
		position: 'absolute',
		zIndex: 2,
		color: Colors.pink,
		top: 18,
		left: 12
	}
})
