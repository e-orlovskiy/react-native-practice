import React from 'react'
import {
	Animated,
	Pressable,
	PressableProps,
	StyleSheet,
	Text
} from 'react-native'

interface CustomButtonProps extends PressableProps {
	text: string
	color?: Animated.AnimatedInterpolation<string | number>
}

export function CustomButton({ text, color, ...props }: CustomButtonProps) {
	return (
		<Pressable {...props}>
			<Animated.View
				style={{
					...styles.container,
					backgroundColor: color
				}}
			>
				<Text style={styles.text}>{text}</Text>
			</Animated.View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 2.5
	},
	text: {
		fontSize: 24,
		color: 'black'
	}
})
