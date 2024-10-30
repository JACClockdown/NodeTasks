import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import  tasksRoute from './routes/tasksRoutes'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/', tasksRoute)

export default app