import { Document, Schema, model } from 'mongoose'

export interface IUserPosts extends Document {
	name: string
	time: string
	image: string
}

export interface IUserPosts extends Document {
	posts: IUserPosts[]
}

const PostsSchema = new Schema({
	posts: [
		{
			name: { type: String, required: true },
			time: { type: String, required: false },
			image: { type: String, required: false }
		}
	]
})

const UserPosts = model<IUserPosts>('userPosts', PostsSchema)

export default UserPosts
