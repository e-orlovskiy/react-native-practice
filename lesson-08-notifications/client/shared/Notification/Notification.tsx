import * as Notifications from 'expo-notifications'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'

export function Notification() {
	const router = useRouter()

	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: true,
			shouldSetBadge: true
		})
	})

	useEffect(() => {
		// подписываемся на уведомления
		const sub = Notifications.addNotificationReceivedListener(notification => {
			console.log(notification.request.content.data)
		})
		const sub2 = Notifications.addNotificationResponseReceivedListener(
			notification => {
				console.log('clicked')
				console.log(notification.notification.request.content.data.page)
				const page = notification.notification.request.content.data.page
				router.push(`/${page}`)
			}
		)
		// отписываемся от уведомлений
		return () => {
			sub.remove()
			sub2.remove()
		}
	}, [])

	return null
}
