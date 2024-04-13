import { SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../../shared/CustomButton/CustomButton'
import { Colors, FontSizes, Spacings } from '../../shared/css_tokens'
import { logoutAtom } from '../../entities/auth/model/auth.state'
import { useSetAtom } from 'jotai'
SplashScreen.preventAutoHideAsync()

export default function MyPosts() {
	const logout = useSetAtom(logoutAtom)

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.text}>index</Text>
				<CustomButton text='Выйти' onPress={logout} />
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
	},
	link: {
		fontSize: FontSizes.header,
		backgroundColor: Colors.gray,
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderColor: Colors.white,
		borderStyle: 'solid',
		borderWidth: 1.5,
		borderRadius: 5,
		fontFamily: 'BalsamiqBold',
		color: Colors.white
	}
})
