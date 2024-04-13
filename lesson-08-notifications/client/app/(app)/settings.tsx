import * as Notifications from 'expo-notifications'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../../shared/CustomButton/CustomButton'
import { Colors, Spacings } from '../../shared/css_tokens'

export default function Settings() {
	const allowsNotifications = async () => {
		const settings = await Notifications.getPermissionsAsync()
		return (
			settings.granted ||
			settings.ios?.status == Notifications.IosAuthorizationStatus.PROVISIONAL
		)
	}

	const requestPermissions = async () => {
		return Notifications.requestPermissionsAsync({
			ios: {
				allowAlert: true,
				allowBadge: true,
				allowSound: true
			}
		})
	}

	const testNotification = async () => {
		const granted = await allowsNotifications()
		if (!granted) {
			requestPermissions()
		}
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'Test notification',
				body: 'profile',
				data: { page: 'profile' }
				// sound
				// subtitile
				// badge
				// vibrate
				// priority
				// color
				// atachments
			},
			trigger: {
				// через сколько секунд оно должно сработать
				seconds: 5
			}
		})
	}

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.text}>Settings</Text>
				<CustomButton text='Напомнить' onPress={testNotification} />
				<StatusBar />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		gap: Spacings.header,
		paddingHorizontal: 20
	},
	text: {
		fontSize: 20,
		fontFamily: 'BalsamiqRegular',
		color: Colors.white,
		textAlign: 'center'
	}
})
