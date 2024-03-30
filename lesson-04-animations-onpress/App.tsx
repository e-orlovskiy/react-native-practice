import { StatusBar } from 'expo-status-bar'
import React, { useRef } from 'react'
import {
	Alert,
	Animated,
	Platform,
	StyleSheet,
	ToastAndroid,
	View
} from 'react-native'
import { CustomAlert } from './src/components/CustomAlert'
import { CustomButton } from './src/components/CustomButton'

export default function App() {
	const [isVisible, setIsVisible] = React.useState(false)

	// * КНОПКИ 1-3 *
	// Создаем отдельный экземпляр Animated.Value для каждой кнопки
	const animatedValues = useRef<
		[Animated.Value, Animated.Value, Animated.Value]
	>([
		new Animated.Value(0), // Для первой кнопки
		new Animated.Value(0), // Для второй кнопки
		new Animated.Value(0) // Для третьей кнопки
	]).current

	// Функция для изменения цвета кнопки
	const changeColor = (index: number) => {
		Animated.timing(animatedValues[index], {
			toValue: 100,
			duration: 3000,
			useNativeDriver: true
		}).start()
	}

	// * КАСТОМНОЕ ВСПЛЫВАЮЩЕЕ ОКНО *

	return (
		<View style={styles.container}>
			{/* Используем каждый Animated.Value в соответствии с индексом кнопки */}
			<CustomButton
				text='OnPress'
				color={animatedValues[0].interpolate({
					inputRange: [0, 100],
					outputRange: ['yellow', 'red']
				})}
				onPress={() => changeColor(0)}
			/>
			<CustomButton
				text='OnPressIn'
				color={animatedValues[1].interpolate({
					inputRange: [0, 100],
					outputRange: ['yellow', 'blue']
				})}
				onPressIn={() => changeColor(1)}
			/>
			<CustomButton
				text='OnPressOut'
				color={animatedValues[2].interpolate({
					inputRange: [0, 100],
					outputRange: ['yellow', 'orange']
				})}
				onPressOut={() => changeColor(2)}
			/>
			<CustomButton
				text='Alert'
				onLongPress={() => {
					Alert.alert(
						'Заголовок сообщения',
						'Проверка срабатывания функции alert',
						[
							{
								text: 'Вариант #1',
								onPress: () => {
									alert('Вариант #1')
								},
								style: 'cancel'
							},
							{
								text: 'Вариант #2',
								onPress: () => {
									alert('Вариант #2')
								},
								style: 'cancel'
							}
						]
					)
				}}
			/>
			<CustomButton
				text='OnlyAndroidToast'
				onPress={() => {
					if (Platform.OS === 'android') {
						ToastAndroid.showWithGravity(
							'Android Toast',
							ToastAndroid.SHORT,
							ToastAndroid.CENTER
						)
					}
				}}
			/>
			<CustomButton
				text='CustomAlert'
				onPress={() => {
					setIsVisible(!isVisible)
				}}
			/>
			<CustomAlert visible={isVisible} text='ttt' />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 60
	}
})
