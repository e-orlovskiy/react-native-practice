import { SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useSetAtom } from 'jotai'
import { StyleSheet, Text, View } from 'react-native'
import { logoutAtom } from '../../entities/auth/model/auth.state'
import { Colors, Spacings } from '../../shared/css_tokens'

export default function Settings() {
	const logout = useSetAtom(logoutAtom)

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.text}>Settings</Text>
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
