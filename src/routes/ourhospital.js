const express = require('express')

const router = express.Router()

const ourHospitalControllers = require('../controllers/ourhospital')

router.post('/post', ourHospitalControllers.post)
router.get('/get', ourHospitalControllers.get)
router.put('/put/:putId', ourHospitalControllers.putId)

module.exports = router;