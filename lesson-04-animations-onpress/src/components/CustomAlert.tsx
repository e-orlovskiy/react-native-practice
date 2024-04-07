import { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

interface CustomAlertProps {
	text: string
	error: boolean
}

export function CustomAlert({ text, error }: CustomAlertProps) {
	const [visible, setVisible] = useState<Boolean>(false)
	const [isAnimating, setIsAnimating] = useState<Boolean>(false)
	const movement = useRef(new Animated.Value(-150)).current

	useEffect(() => {
		console.log('error:', error, 'anim:', isAnimating)

		if (!error || isAnimating) return
		setIsAnimating(true)
		setVisible(true)

		Animated.timing(movement, {
			toValue: 20,
			duration: 300,
			useNativeDriver: true
		}).start(() => {
			const timerId = setTimeout(() => {
				Animated.timing(movement, {
					toValue: -150,
					duration: 300,
					useNativeDriver: true
				}).start(() => {
					setIsAnimating(false)
					setVisible(false)
					return () => {
						clearTimeout(timerId)
					}
				})
			}, 1000)
		})
	}, [error])

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
		position: 'absolute',
		top: 30,
		backgroundColor: '#eb4634',
		borderRadius: 15,
		padding: 15,
		width: '100%',
		borderWidth: 2.5,
		borderColor: 'black'
	},
	text: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: 'bold'
	}
})
