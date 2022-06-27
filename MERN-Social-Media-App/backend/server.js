const express = reauire('express')

// CONFIG
const app = express()
const PORT = process.env.PORT || 5000

// ROUTES

// ERRORS

// SERVER
app.listen(PORT, () => console.log(`Server run on port: ${PORT}`))
