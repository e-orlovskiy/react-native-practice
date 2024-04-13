import { Document, Schema, Types, model } from 'mongoose'
import UserPosts, { IUserPosts } from './userPosts.model'

export interface IUser extends Document {
	login: string
	email: string
	password: string
	posts: IUserPosts
}

const userSchema: Schema = new Schema({
	login: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	avatar: { type: String, required: false },
	posts: { type: Types.ObjectId, ref: 'UserPosts' }
})

userSchema.pre('save', async function (next) {
	const newPosts = new UserPosts({ posts: [] })
	await newPosts.save()

	this.posts = newPosts._id

	next()
})

const User = model<IUser>('users', userSchema)

export default User
