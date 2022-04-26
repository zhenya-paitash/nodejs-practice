const router = require('express').Router()
const { authMiddleware } = require('../middlewares/authMiddleware')
const { getSomething } = require('../controllers/chatController')

router.route('/').get(authMiddleware, getSomething)

module.exports = router
