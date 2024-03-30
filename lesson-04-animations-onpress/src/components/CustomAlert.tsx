import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

interface CustomAlertProps {
	text: string
	visible: boolean
}

export function CustomAlert({ text, visible }: CustomAlertProps) {
	const movement = useRef(new Animated.Value(200)).current

	useEffect(() => {
		if (!visible) return
		Animated.timing(movement, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true
		}).start()
	}, [visible])

	return (
		<Animated.View
			style={{ ...styles.container, transform: [{ translateY: movement }] }}
		>
			<Text style={styles.text}>{text}</Text>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		borderRadius: 15,
		padding: 15,
		width: 300,
		borderWidth: 2.5,
		borderColor: 'black'
	},
	text: {
		textAlign: 'center',
		fontSize: 20
	}
})
