import { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader'
import { Colors, Spacings } from '../../shared/css_tokens'

export default function Profile() {
	const [image, setImage] = useState<string | null>(null)

	return (
		<View style={styles.container}>
			{image ? (
				<Image
					style={styles.image}
					source={{
						uri: image
					}}
				/>
			) : (
				<View style={styles.noImage} />
			)}
			<ImageUploader onUpload={setImage} />
		</View>
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
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	noImage: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: 'gray'
	}
})
