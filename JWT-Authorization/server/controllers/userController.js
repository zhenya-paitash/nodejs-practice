const userService = require('../services/userService')
const ApiError = require('../exceptions/apiError')
const { validationResult } = require('express-validator')

class UserController {
  // @desc      Logout
  // @route     GET /api/user/
  // @access    Public
  async getUsers(req, res, next) {
    try {
      res.status(200).json({ message: 'GET USER' })
    } catch (err) {
      next(err)
    }
  }

  // @desc      Logout
  // @route     GET /api/user/activate/:link
  // @access    Public
  async activate(req, res, next) {
    try {
      const activationLink = req.params.link
      await userService.activate(activationLink)
      return res.redirect(process.env.CLIENT_URL)
    } catch (err) {
      next(err)
    }
  }

  // @desc      Logout
  // @route     GET /api/user/refresh
  // @access    Public
  async refresh(req, res, next) {
    try {
      res.status(200).json({ message: 'REFRESH LOGIN' })
    } catch (err) {
      next(err)
    }
  }

  // @desc      Registration new User
  // @route     POST /api/user/registration
  // @access    Public
  async registration(req, res, next) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      }

      const { email, password } = req.body
      const userData = await userService.registration(email, password)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        // secure: true,  // if https
      })
      return res.status(201).json(userData)
    } catch (err) {
      next(err)
    }
  }

  // @desc      Login
  // @route     POST /api/user/login
  // @access    Public
  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const userData = await userService.login(email, password)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        // secure: true,  // if https
      })
      return res.status(200).json(userData)
    } catch (err) {
      next(err)
    }
  }

  // @desc      Logout
  // @route     POST /api/user/logout
  // @access    Public
  async logout(req, res, next) {
    try {
      res.status(200).json({ message: 'LOGOUT' })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new UserController()
