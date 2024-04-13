import { Link } from 'expo-router'
import { LinkProps } from 'expo-router/build/link/Link'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../css_tokens'

export function CustomLink({ text, ...props }: LinkProps & { text: string }) {
	return (
		<Link style={styles.link} {...props}>
			<Text>{text}</Text>
		</Link>
	)
}

const styles = StyleSheet.create({
	link: {
		fontSize: 18,
		color: Colors.pink,
		fontFamily: 'BalsamiqRegular'
	}
})
