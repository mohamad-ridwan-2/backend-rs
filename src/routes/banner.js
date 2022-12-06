const express = require('express')

const router = express.Router()

const bannerControllers = require('../controllers/banner')

router.post('/post', bannerControllers.post)
router.get('/get', bannerControllers.get)
router.put('/put/:putId', bannerControllers.putId)

module.exports = router