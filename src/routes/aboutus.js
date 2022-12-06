const express = require('express')

const router = express.Router();

const aboutUsControllers = require('../controllers/aboutus');

router.post('/post', aboutUsControllers.post)
router.get('/get', aboutUsControllers.get)
router.put('/put/:putId', aboutUsControllers.putId)

module.exports = router;