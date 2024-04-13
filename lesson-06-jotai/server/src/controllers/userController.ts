import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../config'
import User from '../models/user.model'

export const registerUser = async (req: Request, res: Response) => {
	console.log('register', req.body)
	try {
		const { login, email, password } = req.body
		const isEmailAlreadyExist = await User.findOne({ email })
		if (isEmailAlreadyExist) {
			res
				.status(400)
				.json({ message: `User with this email is already exists` })
			return
		}

		bcrypt.hash(password, 10, async (err, hash) => {
			if (err) throw err
			const newUser = await User.create({ login, email, password: hash })
			res.status(200).send(newUser)
		})
	} catch (error) {
		console.log(error)
		error instanceof Error
			? res.status(400).json({ message: error.message })
			: res.status(400).json({ message: 'something went wrong' })
	}
}

export const loginUser = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email })
		if (user) {
			const isPasswordMatched = await bcrypt.compare(password, user.password)
			if (!isPasswordMatched) {
				res.status(400).json({ message: 'wrong password' })
				return
			}
		} else {
			res.status(400).json({ message: 'user with this email does not exist' })
			return
		}

		const access_token = jwt.sign(
			{
				id: user._id,
				login: user.login,
				email: user.email
			},
			config.jwtSecret,
			{ expiresIn: '1h' }
		)

		// const userPosts = await UserPosts.findOne({ _id: user.posts })

		// res.cookie('jwt-token', access_token, {
		// 	httpOnly: true,
		// 	sameSite: 'none',
		// 	secure: true
		// })

		res.status(200).send({
			id: user._id,
			login: user.login ?? null,
			email: user.email,
			access_token
			// posts: userPosts?.posts
		})
	} catch (error) {
		console.log(error)
		error instanceof Error
			? res.status(400).json({ message: error.message })
			: res.status(400).json({ message: 'something went wrong' })
	}
}
