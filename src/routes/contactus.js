const express = require('express')

const router = express.Router();

const contactUsControllers = require('../controllers/contactus')

router.post('/post', contactUsControllers.post)
router.get('/get', contactUsControllers.get)
router.put('/put/:putId', contactUsControllers.putId)

module.exports = router;