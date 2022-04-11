const router = require('express').Router()
const { getWeather } = require('../controllers/indexController')

router.route('/').get(getWeather)

module.exports = router