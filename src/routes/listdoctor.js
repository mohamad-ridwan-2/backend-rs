const express = require('express')

const router = express.Router();

const listDoctorControllers = require('../controllers/listdoctor')

router.post('/post', listDoctorControllers.post)
router.get('/get', listDoctorControllers.get)
router.put('/put/:putId', listDoctorControllers.putId)

module.exports = router;