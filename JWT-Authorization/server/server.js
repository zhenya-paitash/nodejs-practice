const express = require('express')
const cors = require('cors')
const cookieParse = require('cookie-parser')
const { env, connectDB } = require('./config/config')

// CONFIG
env()
connectDB()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParse())
app.use(cors())

// ROUTES
app.use('/api/user', require('./routes/userRoute'))

// ERRORS
app.use(require('./middlewares/errorMiddleware'))

// SERVER
app.listen(PORT, () => console.log(`Server run on port: ${PORT}`))
