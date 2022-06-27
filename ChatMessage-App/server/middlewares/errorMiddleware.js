// const ApiError = require('../error')

// module.exports = (err, req, res, next) => {
//   if (process.env.NODE_ENV !== 'production' && err instanceof ApiError) {
//     return res.status(err.status).json({
//       code: err.status,
//       message: err.message,
//       error: err.errors,
//       stack: err.stack,
//     })
//   }

//   res.status(500).json({ message: '❌ Server error' })
// }
const notFound = (req, res, next) => {
  const err = new Error('Page not found')
  res.status(404)
  next(err)
}

const errHandler = (err, req, res, next) => {
  const statusCode =
    res.statusCode && res.statusCode >= 300 ? res.statusCode : 500

  res.status(statusCode).json({
    code: statusCode,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = {
  notFound,
  errHandler,
}
