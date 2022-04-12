const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mailService')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/userDto')

class UserService {
  async registration(email, password) {
    const newUser = await User.findOne({ email })
    if (newUser) {
      throw new Error(
        `Пользователь с таким почтовым адресом ${email} уже существует`
      )
    }

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const activationLink = uuid.v4()
    const user = await User.create({
      email,
      password: hashPassword,
      activationLink,
    })
    await mailService.sendActivationMail(email, activationLink)

    const userDto = new UserDto(user) // id, email, isActivated
    const tokens = await tokenService.generateToken({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }
}

module.exports = new UserService()
