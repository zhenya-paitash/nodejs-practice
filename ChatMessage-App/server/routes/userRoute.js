const router = require('express').Router()
const { authMiddleware } = require('../middlewares/authMiddleware')
const { login, register } = require('../controllers/userController')

router.route('/').get(authMiddleware, login)
router.route('/register').post(register)

module.exports = router
