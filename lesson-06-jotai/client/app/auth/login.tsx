import { router } from 'expo-router'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { loginAtom } from '../../entities/auth/model/auth.state'
import { CustomAlert } from '../../shared/CustomAlert/CustomAlert'
import { CustomButton } from '../../shared/CustomButton/CustomButton'
import { CustomInput } from '../../shared/CustomInput/CustomInput'
import { CustomLink } from '../../shared/CustomLink/CustomLink'
import { Colors, Spacings } from '../../shared/css_tokens'

export default function Login() {
	const [localError, setLocalError] = useState<string | undefined>()
	const [email, setEmail] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom)

	const submit = () => {
		setLocalError(undefined)
		if (!email) {
			setLocalError('Email не может быть пустым')
			return
		}
		if (!password) {
			setLocalError('Пароль не может быть пустым')
			return
		}
		login({ email, password })
	}

	useEffect(() => {
		if (error) {
			setLocalError(error)
		}
	}, [error])

	useEffect(() => {
		if (access_token) {
			router.replace('/(app)')
		}
	}, [access_token])

	return (
		<View style={styles.container}>
			<CustomAlert error={localError} />
			<Text style={styles.header}>Авторизация</Text>
			<View style={styles.content}>
				<View style={styles.form}>
					<CustomInput placeholder='Email' onChangeText={setEmail} />
					<CustomInput
						isPassword
						placeholder='Пароль'
						onChangeText={setPassword}
					/>
					<CustomButton text='Войти' onPress={submit} isLoading={isLoading} />
				</View>
				<CustomLink href={'/auth/restore'} text='Восстановить пароль' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		position: 'relative',
		justifyContent: 'center',
		flex: 1,
		padding: 30,
		backgroundColor: Colors.primary
	},
	content: {
		alignItems: 'center',
		gap: Spacings.text
	},
	form: {
		alignSelf: 'stretch',
		gap: Spacings.items
	},
	header: {
		fontSize: 30,
		color: Colors.white,
		fontFamily: 'BalsamiqBold',
		textAlign: 'center',
		marginBottom: 10
	}
})
