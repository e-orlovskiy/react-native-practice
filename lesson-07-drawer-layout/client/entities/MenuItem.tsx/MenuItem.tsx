import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types'
import { ReactNode, useState } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../shared/css_tokens'

export interface IMenuItemProps {
	drawer: DrawerContentComponentProps
	icon: ReactNode
	text: string
	path: string
}

export default function MenuItem({
	drawer,
	icon,
	text,
	path,
	...props
}: IMenuItemProps & PressableProps) {
	const [clicked, setClicked] = useState(false)
	const isActive = drawer.state.routes[drawer.state.index].name === path
	return (
		<Pressable
			{...props}
			onPress={() => drawer.navigation.navigate(path)}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
		>
			<View
				style={{
					...styles.item,
					borderColor: isActive ? Colors.pink : Colors.gray,
					backgroundColor: clicked || isActive ? Colors.pink : Colors.gray
				}}
			>
				{icon}
				<Text style={styles.text}>{text}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	item: {
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: Colors.gray,
		borderRightWidth: 5
	},
	text: {
		color: Colors.white,
		fontSize: 16,
		fontFamily: 'BalsamiqRegular'
	}
})
