import { Router } from 'express'
import { addPost, deletePost, updatePost } from '../controllers/postController'
import {
	getProfile,
	loginUser,
	registerUser
} from '../controllers/userController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = Router()

// user router
router.post('/auth/register', registerUser)
router.post('/auth/login', loginUser)
router.get('/getProfile', authMiddleware, getProfile)

// posts router
router.post('/posts/addTask', authMiddleware, addPost)
router.delete('/posts/deleteTask', authMiddleware, deletePost)
router.put('/posts/updateTask', authMiddleware, updatePost)

export default router
