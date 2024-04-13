import React, { useLayoutEffect, useRef } from 'react'
import {
	ActivityIndicator,
	Animated,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleSheet,
	Text
} from 'react-native'
import { Colors } from '../css_tokens'

export function CustomButton({
	text,
	isLoading,
	...props
}: PressableProps & { text: string; isLoading?: boolean }) {
	const animatedValue = useRef(new Animated.Value(100)).current
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.gray, Colors.pink]
	})

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true
		}).start()
		props.onPressIn && props.onPressIn(e)
	}

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true
		}).start()
		props.onPressOut && props.onPressOut(e)
	}

	useLayoutEffect(() => {
		animatedValue.setValue(100)
	}, []) //

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View
				style={{
					...styles.button,
					backgroundColor: color
				}}
			>
				{!isLoading && <Text style={styles.text}>{text}</Text>}
				{isLoading && <ActivityIndicator color={Colors.white} size='large' />}
			</Animated.View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 13,
		paddingHorizontal: 42,
		borderRadius: 10
	},
	text: {
		color: Colors.white,
		fontSize: 22,
		fontFamily: 'BalsamiqBold'
	}
})
