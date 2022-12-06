const express = require('express')

const router = express.Router()

const onlineReservationControllers = require('../controllers/onlinereservation')

router.post('/post', onlineReservationControllers.post)
router.get('/get', onlineReservationControllers.get)

module.exports = router;