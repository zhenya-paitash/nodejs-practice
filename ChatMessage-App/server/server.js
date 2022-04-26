const express = require('express')
const cors = require('cors')
const { env, database } = require('./config')
require('colors')

// CONFIG
const app = express()
env()
database()
const PORT = process.env.PORT || 5000
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
)
app.use(express.json())

//ROUTES
app.use('/api', require('./routes/chatRoute'))

// ERROR
app.use(require('./middlewares/errorMiddleware'))

// SERVER
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.cyan))
