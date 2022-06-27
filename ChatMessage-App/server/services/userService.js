const User = require('../models/useModel')

class UserService {
  async userIsExists(username, email) {
    const usernameCheck = await User.findOne({ username })
    const emailCheck = await User.findOne({ email })
    if (usernameCheck) {
      res.status(401)
      throw new Error('Username already used')
    }
    if (emailCheck) {
      res.status(401)
      throw new Error('Email already used')
    }
  }
}

module.exports = new UserService()
