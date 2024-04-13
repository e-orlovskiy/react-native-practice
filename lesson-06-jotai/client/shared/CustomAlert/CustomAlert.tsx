import { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, Text } from 'react-native'
import { Colors } from '../css_tokens'

interface CustomAlertProps {
	error: string | undefined
}

const width = Dimensions.get('window').width

export function CustomAlert({ error }: CustomAlertProps) {
	const [visible, setVisible] = useState<Boolean>(false)
	const [isAnimating, setIsAnimating] = useState<Boolean>(false)
	const movement = useRef(new Animated.Value(-150)).current

	const width = Dimensions.get('window').width
	useEffect(() => {
		console.log('error:', error, 'anim:', isAnimating)

		if (!error || isAnimating) return
		setIsAnimating(true)
		setVisible(true)

		Animated.timing(movement, {
			toValue: 20,
			duration: 600,
			useNativeDriver: true
		}).start(() => {
			const timerId = setTimeout(() => {
				Animated.timing(movement, {
					toValue: -150,
					duration: 600,
					useNativeDriver: true
				}).start(() => {
					setIsAnimating(false)
					setVisible(false)
					return () => {
						clearTimeout(timerId)
					}
				})
			}, 1200)
		})
	}, [error])

	return (
		<Animated.View
			style={{ ...styles.container, transform: [{ translateY: movement }] }}
		>
			<Text style={styles.text}>{error}</Text>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 30,
		backgroundColor: Colors.pink,
		borderRadius: 15,
		left: 30,
		width: width - 60,
		padding: 15,
		zIndex: 2
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		color: Colors.white,
		fontWeight: 'bold'
	}
})
