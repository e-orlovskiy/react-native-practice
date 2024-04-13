// src/index.ts
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import { config } from './config'
import router from './router/router'

const app = express()
const allowedOrigins = ['*']
const port = config.port

app.use(bodyParser.json())
app.use(cookieParser())
app.use(
	cors({
		origin: allowedOrigins,
		credentials: true
	})
)

app.use('/', router)

async function start() {
	try {
		mongoose.connect(config.databaseURI)
		console.log('connected to database')
	} catch (err) {}

	app.listen(port, () => {
		console.log(`server started on: http://localhost:${port}`)
	})
}

start()
