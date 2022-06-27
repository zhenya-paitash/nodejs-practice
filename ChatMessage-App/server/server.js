const express = require('express')
const cors = require('cors')
const { env, database } = require('./config')
const { notFound, errHandler } = require('./middlewares/errorMiddleware')
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

//ROUTE
app.use('/api/auth', require('./routes/userRoute'))

// ERROR
app.use(notFound)
app.use(errHandler)

// SERVER
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.cyan))
