const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

module.exports = {
  env: () => dotenv.config({ path: path.join(__dirname, '.env') }),

  database: () => {
    mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(conn =>
        console.log(`MongoDB Connection: ${conn.connection.host}`.bgCyan)
      )
      .catch(e => {
        console.log(e.message.bgRed)
        console.error(e)
        process.exit(1)
      })
  },
}
