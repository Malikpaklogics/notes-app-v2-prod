import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/notes_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err))

// Simple health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' })
})

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
