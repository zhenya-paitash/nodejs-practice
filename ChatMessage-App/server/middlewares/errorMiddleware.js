const ApiError = require('../error')

module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production' && err instanceof ApiError) {
    return res.status(err.status).json({
      code: err.status,
      message: err.message,
      error: err.errors,
      stack: err.stack,
    })
  }

  res.status(500).json({ message: '❌ Server error' })
}
