const express = require('express')

const router = express.Router();

const carouselHomeControllers = require('../controllers/carouselhome')

router.post('/post', carouselHomeControllers.post)
router.get('/get', carouselHomeControllers.get)
router.put('/put/:putId', carouselHomeControllers.putId)

module.exports = router;