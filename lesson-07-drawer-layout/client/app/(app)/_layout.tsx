import { Redirect } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { useAtomValue } from 'jotai'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { authAtom } from '../../entities/auth/model/auth.state'
import { CustomDrawer } from '../../entities/drawer/CustomDrawer'
import { Colors } from '../../shared/css_tokens'

export default function AppLayout() {
	const { access_token } = useAtomValue(authAtom)
	if (!access_token) {
		return <Redirect href='/auth/login' />
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				drawerContent={props => <CustomDrawer {...props} />}
				screenOptions={({ navigation }) => ({
					headerStyle: {
						backgroundColor: Colors.pink,
						shadowColor: 'transparent'
					},
					headerTitleStyle: {
						color: Colors.white,
						fontFamily: 'BalsamiqRegular',
						fontSize: 20
					},
					headerTitleAlign: 'center',
					sceneContainerStyle: {
						backgroundColor: Colors.primary
					},
					headerTintColor: Colors.white
				})}
			>
				<Drawer.Screen name='index' options={{ title: 'Мои посты' }} />
				<Drawer.Screen name='profile' options={{ title: 'Мой профиль' }} />
				<Drawer.Screen name='settings' options={{ title: 'Настройки' }} />
			</Drawer>
		</GestureHandlerRootView>
	)
}
