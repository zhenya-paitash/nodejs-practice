const jwt = require('jsonwebtoken')
const Token = require('../models/tokenModel')

class TokenService {
  async generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
      expiresIn: '30m',
    })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
      expiresIn: '30d',
    })

    return { accessToken, refreshToken }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ user: userId })
    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }

    const token = await Token.create({ user: userId, refreshToken })
    return token
  }
}

module.exports = new TokenService()
