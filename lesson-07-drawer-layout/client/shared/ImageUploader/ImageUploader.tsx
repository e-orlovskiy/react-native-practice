import {
	MediaTypeOptions,
	PermissionStatus,
	launchImageLibraryAsync,
	useMediaLibraryPermissions
} from 'expo-image-picker'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../css_tokens'

interface ImageUploaderProps {
	onUpload: (uri: string) => void
}

export function ImageUploader({ onUpload }: ImageUploaderProps) {
	const [libraryPermissions, requestLibraryPermission] =
		useMediaLibraryPermissions()

	const verifyMediaPermissions = async () => {
		if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await requestLibraryPermission()
			return res.granted
		}
		if (libraryPermissions?.status === PermissionStatus.DENIED) {
			Alert.alert('Недостаточно прав для доступа к фото')
			return false
		}
		return true
	}

	const pickImage = async () => {
		const isPermissionGranted = await verifyMediaPermissions()

		if (!isPermissionGranted) {
			const res = await requestLibraryPermission()
			return res.granted
		}
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5
		})
		if (!result.assets) {
			return
		}
		onUpload(result.assets[0].uri)
	}

	return (
		<Pressable onPress={pickImage}>
			<View style={styles.container}>
				<Text style={styles.text}>Загрузить изображение</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 8,
		backgroundColor: Colors.pink,
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 17,
		alignItems: 'center'
	},
	text: {
		fontSize: 14,
		fontFamily: 'BalsamiqRegular',
		color: Colors.white
	}
})
