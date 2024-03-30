import { useRef } from 'react'
import {
	Animated,
	Pressable,
	PressableProps,
	StyleSheet,
	Text
} from 'react-native'

export function CustomButton({
	text,
	...props
}: PressableProps & { text: string }) {
	// animation value for color
	const animatedValueColor = useRef(new Animated.Value(0)).current
	// color interpolation
	const color = animatedValueColor.interpolate({
		inputRange: [0, 100],
		outputRange: ['yellow', 'lime']
	})
	// animation rules for color
	Animated.timing(animatedValueColor, {
		toValue: 100,
		duration: 3000,
		useNativeDriver: true
	}).start()
	// animation value for scale
	const animatedValue = useRef(
		new Animated.ValueXY({
			x: 0.5,
			y: 0.5
		})
	).current
	// animation rules for scale
	Animated.timing(animatedValue, {
		toValue: {
			x: 1.3,
			y: 1.3
		},
		duration: 1000,
		useNativeDriver: true
	}).start()

	return (
		<Pressable {...props}>
			<Animated.View
				style={{
					...styles.container,
					backgroundColor: color,
					transform: [{ scaleX: animatedValue.x }, { scaleY: animatedValue.y }]
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
