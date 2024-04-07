## Тема. Шрифты

### Порядок установки и подключения шрифтов:

> :warning: Android, iOS и web все вместе поддерживают только форматы шрифтов .otf и .ttf

1. Установить библиотеку:

   ```ts
   npx expo install expo-font
   ```

2. Скачать нужные шрифты и установить по пути: **assets / fonts**
3. В **app.json** указать путь к шрифтам:

   ```ts
   {
   	"expo": {
   		"plugins": [
   			[
   				"expo-font",
   				{
   					"fonts": ["path/to/file.ttf"]
   				}
   			]
   		]
   	}
   }
   ```

4. В компоненте, где нужен шрифт используем специальный хук `useFonts`:

   ```ts
   const [fontLoaded, fontError] = useFonts({
   	BalsamicRegular: require('../assets/fonts/BalsamiqSans-Regular.ttf'),
   	BalsamicBold: require('../assets/fonts/BalsamiqSans-Bold.ttf'),
   	BalsamicItalic: require('../assets/fonts/BalsamiqSans-Italic.ttf'),
   	BalsamicBoldItalic: require('../assets/fonts/BalsamiqSans-BoldItalic.ttf')
   })

   if (!fontLoaded) {
   	return null
   }

    // Далее мы сможем использовать наши шрифты:
   text: {
   	fontSize: 20,
   	fontFamily: 'BalsamicRegular'
   }
   ```

Если загрузка шрифтов будет занимать много времени, то этот код будет работать не совсем корректно

## Тема. SplashScreen

По своей сути, SplashScreen - что-то вроде прелоадера но для React Native приложений

### Установка SplashScreen:

1.  В app.json можно добавить своё изображение для SplashScreen:
    ```json
    	"splash": {
    		"image": "./assets/splash.png",
    		"resizeMode": "contain",
    		"backgroundColor": "#ffffff"
    	},
    ```
2.  В коде мы должны задать, чтобы SplashScreen не работал по дефолту

    ```ts
    SplashScreen.preventAutoHideAsync()
    ```

3.  А также, если, допустим прогрузились шрифты, то убирать `SplashScreen` принудительно:

    ```ts
    useEffect(() => {
    	if (!fontLoaded) {
    		return
    	}
    	SplashScreen.hideAsync()
    }, [fontLoaded])
    ```

4.  Также, можно добавить анимированный SplashScreen: https://www.youtube.com/watch?v=Y_IaioaI2w0&ab_channel=notJust%E2%80%A4dev

## Тема. Unmatched Routes

Если мы ошибёмся в какой-то из ссылок и напишем несуществующий роут, то будем попадать на страничку Unmatched Route.

### Кастомизация Unmatched Route

1. **[...unmatched].tsx** - если что-то не попадает в другие ваши роуты, оно попадает в unmatched.
2. Пример:

   ```tsx
   import { Link } from 'expo-router'
   import { Image, StyleSheet, Text, View } from 'react-native'

   export default function unmatchedRoute() {
   	return (
   		<View style={styles.container}>
   			<Image
   				source={require('../assets/error-404.png')}
   				style={styles.image}
   			/>
   			<Text style={styles.text}>
   				Упс... Такой страницы не существует, попробуйте вернуться на главную
   				страничку
   			</Text>
   			<Link style={styles.link} href='/'>
   				Главная
   			</Link>
   		</View>
   	)
   }

   const styles = StyleSheet.create({
   	container: {
   		flex: 1,
   		backgroundColor: '#39425C',
   		justifyContent: 'center',
   		alignItems: 'center',
   		padding: 20
   	},
   	image: {
   		width: 200,
   		height: 200,
   		resizeMode: 'contain'
   	},
   	text: {
   		fontSize: 18,
   		fontFamily: 'BalsamicRegular',
   		textAlign: 'center',
   		color: '#fff'
   	},
   	link: {
   		fontSize: 26,
   		fontFamily: 'BalsamicBold',
   		color: '#FF7A2E'
   	}
   })
   ```

## Тема. Параметрические роуты

Параметрические роуты позволяют получать данные по определённым параметрам (например id).

Чтобы создать такие роуты, в папке, на которую будет ссылать ExpoRouter необходимо создать файл с названием **[alias].tsx**. Это зарезервированное название. Это будет означать, что когда я перейду по роуту: **/folder/:anyparam**, то у нас появится наш **alias**, который можно использовать и изменять.

Название не обязательно будет alias, пример: id, param и т.д.

Зависеть он будет от параметров. Поэтому используя специальный хук, мы сможем получить эти параметры.

Синтаксис:

```tsx
export default function UserPage() {
	const { alias } = useLocalSearchParams()
	return (
		<View>
			<Text>{alias}</Text>
		</View>
	)
}
```

Пример получения данных на основании нашего параметра alias из бэкенда:

```tsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserPage() {
	const { alias } = useLocalSearchParams()
	const [userData, setUserData] = useState(null)

	useEffect(() => {
		// Делаем запрос к API, передавая параметр alias в URL
		axios
			.get(`https://example.com/api/users/${alias}`)
			.then(response => setUserData(response.data))
			.catch(error => console.error('Ошибка при получении данных:', error))
	}, [alias])

	return (
		<View>
			{userData ? (
				<Text>{JSON.stringify(userData)}</Text>
			) : (
				<Text>Загрузка данных...</Text>
			)}
		</View>
	)
}
```
