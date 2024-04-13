import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { Colors } from '../../shared/css_tokens'

export default function Restore() {
	return (
		<View>
			<Link href={'/'}>
				<Text style={{ color: Colors.pink }}>Restore</Text>
			</Link>
		</View>
	)
}
