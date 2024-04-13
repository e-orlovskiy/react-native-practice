import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
	DrawerContentComponentProps,
	DrawerContentScrollView
} from '@react-navigation/drawer'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { CustomLink } from '../../shared/CustomLink/CustomLink'
import { Colors } from '../../shared/css_tokens'
import { logoutAtom } from '../auth/model/auth.state'
import MenuItem from '../MenuItem.tsx/MenuItem'
import { loadProfileAtom } from '../user/model/user.state'
import UserProfile from '../user/ui/UserProfile'

const iconsMenu = [
	{
		text: 'Посты',
		icon: <FontAwesomeIcon icon={faUser} color={Colors.white} />,
		path: 'index'
	},
	{
		text: 'Профиль',
		icon: <FontAwesomeIcon icon={faUser} color={Colors.white} />,
		path: 'profile'
	},
	{
		text: 'Настройки',
		icon: <FontAwesomeIcon icon={faUser} color={Colors.white} />,
		path: 'settings'
	}
]

export function CustomDrawer(props: DrawerContentComponentProps) {
	const logout = useSetAtom(logoutAtom)
	const [profile, loadProfile] = useAtom(loadProfileAtom)

	useEffect(() => {
		if (!profile.isLoading && !profile.profile) {
			loadProfile()
		}
	}, [profile])

	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={styles.scrollView}
		>
			<View style={styles.content}>
				<UserProfile user={profile.profile} />
				<View style={styles.list}>
					{iconsMenu.map(item => (
						<MenuItem
							key={item.path}
							icon={item.icon}
							text={item.text}
							path={item.path}
							drawer={props}
						/>
					))}
				</View>
			</View>
			<View style={styles.footer}>
				<CustomLink text='Выход' onPress={logout} href='/auth/login' />
			</View>
		</DrawerContentScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: Colors.primary
	},
	content: {
		paddingVertical: 25,
		paddingHorizontal: 10,
		flex: 1
	},
	footer: {
		// backgroundColor: 'black',
		marginBottom: 25,
		alignItems: 'center'
	},
	list: {
		marginTop: 25,
		gap: 10
	}
})
