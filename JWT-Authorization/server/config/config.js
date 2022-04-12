const mongoose = require('mongoose')
const path = require('path')
const { config } = require('dotenv')

module.exports = {
  env: () => config({ path: path.join(__dirname, '.env') }),

  connectDB: async () => {
    try {
      const conn = await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log(`MongoDB Connection: ${conn.connection.host} `)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  },
}
