const express = require('express')

const router = express.Router()

const generalControllers = require('../controllers/general')

router.post('/post', generalControllers.post)
router.get('/get', generalControllers.get)
router.put('/put/:putId', generalControllers.putId)

module.exports = router;