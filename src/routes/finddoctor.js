const express = require('express')

const router = express.Router();

const findDoctorControllers = require('../controllers/finddoctor')

router.post('/post', findDoctorControllers.post)
router.get('/get', findDoctorControllers.get)
router.put('/put/:putId', findDoctorControllers.putId)

module.exports = router;