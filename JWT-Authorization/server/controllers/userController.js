const userService = require('../services/userService')

class UserController {
  // @desc      Logout
  // @route     GET /api/user/
  // @access    Public
  async getUsers(req, res) {
    try {
      res.status(200).json({ message: 'GET USER' })
    } catch (err) {}
  }

  // @desc      Logout
  // @route     GET /api/user/activate/:link
  // @access    Public
  async activate(req, res) {
    try {
      res.status(200).json({ message: 'ACTIVATE USER' })
    } catch (err) {}
  }

  // @desc      Logout
  // @route     GET /api/user/refresh
  // @access    Public
  async refresh(req, res) {
    try {
      res.status(200).json({ message: 'REFRESH LOGIN' })
    } catch (err) {}
  }

  // @desc      Registration new User
  // @route     POST /api/user/registration
  // @access    Public
  async registration(req, res) {
    try {
      const { email, password } = req.body
      const userData = await userService.registration(email, password)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        // secure: true,  // if https
      })
      return res.status(201).json(userData)
    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  }

  // @desc      Login
  // @route     POST /api/user/login
  // @access    Public
  async login(req, res) {
    try {
      res.status(200).json({ message: 'LOGIN USER' })
    } catch (err) {}
  }

  // @desc      Logout
  // @route     POST /api/user/logout
  // @access    Public
  async logout(req, res) {
    try {
      res.status(200).json({ message: 'LOGOUT' })
    } catch (err) {}
  }
}

module.exports = new UserController()
