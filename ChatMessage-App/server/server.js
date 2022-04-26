const express = require('express')
const { env, database } = require('./config')

// CONFIG
const app = express()
env()
database()
const PORT = process.env.PORT || 5000

//ROUTES
app.use('/api', require('./routes/chatRoute'))

// ERROR
app.use(require('./middlewares/errorMiddleware'))

// SERVER
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
