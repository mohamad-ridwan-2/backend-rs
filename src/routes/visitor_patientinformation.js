const express = require('express')

const router = express.Router()

const visitor_patientControllers = require('../controllers/visitor_patientinformation')

router.post('/post', visitor_patientControllers.post)
router.get('/get', visitor_patientControllers.get)
router.put('/put/:putId', visitor_patientControllers.putId)

module.exports = router;