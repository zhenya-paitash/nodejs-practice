const router = require('express').Router()
const userController = require('../controllers/userController')
const { body } = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')

// GET
router.route('/activate/:link').get(userController.activate)
router.route('/refresh').get(userController.refresh)
router.route('/').get(authMiddleware, userController.getUsers)
// POST
router
  .route('/registration')
  .post(
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration
  )
router.route('/login').post(userController.login)
router.route('/logout').post(userController.logout)

module.exports = router
