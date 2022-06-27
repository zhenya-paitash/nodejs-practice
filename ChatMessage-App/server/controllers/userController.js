const asyncHandler = require('express-async-handler')
const userService = require('../services/userService')
const User = require('../models/useModel')
const bcrypt = require('bcrypt')

// @desc      Register
// @route     POST /api/auth/register
// @access    Public ✔️
const register = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body
  // const usernameCheck = await User.findOne({ username })
  // if (usernameCheck) {
  //   res.status(401)
  //   throw new Error('Username already used')
  // }
  // const emailCheck = await User.findOne({ email })
  // if (emailCheck) {
  //   res.status(401)
  //   throw new Error('Email already used')
  // }
  await userService.userIsExist(username, password)

  const user = await User.create({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
  })
  delete user.password
  res.status(201).json({ user })
})

// @desc      Login
// @route     POST /api/auth/login
// @access    Public ✔️
const login = asyncHandler(async (req, res, next) => {
  const user = await userService.getUser()
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  res.status(200).json({ message: 'You get something', user })
})

module.exports = {
  register,
  login,
}
