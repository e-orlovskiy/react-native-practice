import { NextFunction, Request, RequestHandler, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { config } from '../config'

export interface AuthRequest extends Request {
	user?: string | JwtPayload
}

export const authMiddleware: RequestHandler = async (
	req: AuthRequest,
	res: Response,
	next: NextFunction
) => {
	// токен достаём из заголовка он в формате "Bearer <token>"
	const token = req.headers['authorization']?.replace('Bearer ', '')
	if (!token) {
		return res.status(401).send('Unauthorized')
	}

	try {
		const decoded = jwt.verify(token, config.jwtSecret)
		req.user = decoded
		next()
	} catch (error) {
		if (error instanceof jwt.JsonWebTokenError || error instanceof Error) {
			console.log(error.message)
			res.status(401).send('Unauthorized')
		}
	}
}
