const url = require('url')
const needle = require('needle')

// ENV VARS
const { API_BASE_URL, API_KEY_NAME, API_KEY_VALUE, NODE_ENV } = process.env

// @desc      Get weather
// @route     GET /api/weather
// @access    Public
const getWeather = async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    })
    const reqUrl = `${API_BASE_URL}?${params}`

    const apiRes = await needle('get', reqUrl)
    const data = apiRes.body

    // Log the request to public API
    NODE_ENV !== 'production' && console.log('REQUEST: ' + reqUrl)

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = {
  getWeather,
}
