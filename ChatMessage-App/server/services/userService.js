// const User = require('../models/useModel')
const ApiError = require('../error')

const getUser = () => {
  throw ApiError.NotFound()
}

module.exports = {
  getUser,
}
