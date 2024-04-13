import dotenv from 'dotenv'
dotenv.config()

export const config = {
	jwtSecret: process.env.JWT_SECRET_KEY!,
	databaseURI: process.env.MONGO_DB_CONNECTION!,
	port: process.env.PORT || 3000
}
