import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../shared/css_tokens'
import { IUser } from '../model/user.model'

export default function UserProfile({ user }: { user: IUser | null }) {
	if (!user) return null
	return (
		<View style={styles.container}>
			{user.avatar ? (
				<Image source={{ uri: user.avatar }} style={styles.avatar} />
			) : (
				<View style={styles.noAvatar}></View>
			)}
			<Text style={styles.login}>{user.login}</Text>
			<Text style={styles.email}>{user.email}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 15
	},
	noAvatar: {
		width: 120,
		height: 120,
		borderRadius: 60,
		backgroundColor: 'gray'
	},
	login: {
		fontSize: 20,
		textAlign: 'center',
		color: Colors.white,
		fontFamily: 'BalsamiqRegular'
	},
	email: {
		fontSize: 16,
		textAlign: 'center',
		color: Colors.gray,
		fontFamily: 'BalsamiqRegular'
	}
})
