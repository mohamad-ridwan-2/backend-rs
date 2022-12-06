const express = require('express')

const router = express.Router()

const promoControllers = require('../controllers/promo')

router.post('/post', promoControllers.post)
router.get('/get', promoControllers.get)
router.put('/put/:putId', promoControllers.putId)

module.exports = router;