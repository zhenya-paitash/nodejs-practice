// IMPORTS
const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const apicache = require('apicache')
require('dotenv').config()

const app = express()

// CONFIG
const PORT = process.env.PORT || 5000
const limiter = rateLimit({
  windowMS: 10 * 60 * 1000, // 10 min
  max: 50,
})
const cache = apicache.middleware

app.use(cors())
app.use(limiter)
app.set('trust proxy', 1)
app.use(express.static('public'))

// ROUTES
app.use('/api/weather', cache('2 minutes'), require('./routes/indexRoute'))

// SERVER
app.listen(PORT, () => console.log(`Server run on port: ${PORT}`))
