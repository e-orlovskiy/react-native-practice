import { useState } from 'react'
import {
	Image,
	Pressable,
	StyleSheet,
	TextInput,
	TextInputProps,
	View
} from 'react-native'

export function Input(props: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	return (
		<View>
			<Pressable
				onPress={() => {
					setIsPasswordVisible(state => !state)
				}}
			>
				{props.isPassword && (
					<Image
						source={require('../assets/favicon.png')}
						style={styles.image}
					/>
				)}
			</Pressable>
			<TextInput
				style={styles.input}
				secureTextEntry={props.isPassword && !isPasswordVisible}
				{...props}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'white',
		height: 50,
		width: 300,
		margin: 10,
		padding: 10,
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 1,
		fontSize: 24
	},
	image: {
		position: 'absolute',
		top: 10,
		right: 30
	}
})
