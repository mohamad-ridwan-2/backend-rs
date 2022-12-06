const express = require('express')

const router = express.Router();

const testimonialControllers = require('../controllers/testimonial')

router.post('/post', testimonialControllers.post)
router.get('/get', testimonialControllers.get)
router.put('/put/:putId', testimonialControllers.putId)

module.exports = router;