const express = require('express')

const router = express.Router()

const emailUserControllers = require('../controllers/emailuser')

router.post('/post', emailUserControllers.post)
router.get('/get', emailUserControllers.get)
router.put('/put/:putId', emailUserControllers.putId)

module.exports = router;