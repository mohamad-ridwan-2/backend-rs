const express = require('express')

const router = express.Router()

const headerControllers = require('../controllers/header')

router.post('/post', headerControllers.post)
router.get('/get', headerControllers.get)
router.put('/put/:putId', headerControllers.putId)

module.exports = router;