import { Response } from 'express'
import { AuthRequest } from '../middleware/authMiddleware'
import User from '../models/user.model'
import UserPosts from '../models/userPosts.model'

export const addPost = async (req: AuthRequest, res: Response) => {
	const decoded = req.user
	try {
		if (typeof decoded === 'object' && 'id' in decoded) {
			const user = await User.findById(decoded.id)
			const userPosts = await UserPosts.findOne({ _id: user?.posts })

			if (userPosts) {
				if (userPosts?.posts.find(post => post.name == req.body.name)) {
					return res
						.status(400)
						.json({ message: 'post with this name already exists' })
				} else {
					userPosts?.posts.push(req.body)
					await userPosts?.save()
				}
			}
		}
		return res.status(200).json({ message: 'post added' })
	} catch (err) {
		console.log(err)
		return res.status(400).json({ message: 'post not added' })
	}
}

export const deletePost = async (req: AuthRequest, res: Response) => {
	const decoded = req.user
	try {
		if (typeof decoded === 'object' && 'id' in decoded) {
			const user = await User.findById(decoded.id)
			const userPosts = await UserPosts.findOne({ _id: user?.posts })

			if (userPosts) {
				const post = userPosts.posts.find(post => post.name == req.body.name)
				if (post) {
					userPosts.posts = userPosts.posts.filter(
						post => post.name != req.body.name
					)
					await userPosts.save()
				}
			}
		}
		return res.status(200).json({ message: 'post deleted' })
	} catch (err) {
		console.log(err)
		return res.status(400).json({ message: 'post not deleted' })
	}
}

export const updatePost = async (req: AuthRequest, res: Response) => {
	const decoded = req.user
	console.log(req.body)
	try {
		if (typeof decoded === 'object' && 'id' in decoded) {
			const user = await User.findById(decoded.id)
			const userPosts = await UserPosts.findOne({ _id: user?.posts })
			if (userPosts) {
				const post = userPosts.posts.find(post => post.name == req.body.name)
				if (post) {
					post.name = req.body.name
					post.time = req.body.time
					await userPosts.save()
				}
			}
		}
		return res.status(200).json({ message: 'post updated' })
	} catch (err) {
		console.log(err)
		return res.status(400).json({ message: 'post not updated' })
	}
}
