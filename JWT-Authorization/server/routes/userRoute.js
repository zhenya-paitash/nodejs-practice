const router = require('express').Router()
const userController = require('../controllers/userController')

// GET
router.route('/').get(userController.getUsers)
router.route('/activate/:link').get(userController.activate)
router.route('/refresh').get(userController.refresh)
// POST
router.route('/registration').post(userController.registration)
router.route('/login').post(userController.login)
router.route('/logout').post(userController.logout)

module.exports = router
