// const asyncHandler = require('express-async-handler')
const userService = require('../services/userService')

// @desc      Get something
// @route     GET /*
// @access    Private❌
const getSomething = async (req, res, next) => {
  try {
    const user = await userService.getUser()
    res.status(200).json({ message: 'You get something', user })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  getSomething,
}
