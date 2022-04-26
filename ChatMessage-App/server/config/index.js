const path = require('path')
const dotenv = require('dotenv')

module.exports = {
  env: () => dotenv.config({ path: path.join(__dirname, '.env') }),
  database: async () => console.log(`Database connected!`),
}
