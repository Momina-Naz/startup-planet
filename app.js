import express from 'express'
import cors from 'cors'
import { apiRouter } from './routes/apiRoutes.js'

export const app = express()

app.use(cors())

app.use('/api', apiRouter)

app.use((req, res) => {
  res
    .status(404)
    .json({ message: 'Endpoint not found. Please check the API documentation.' })
})

