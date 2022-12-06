const express = require('express')

const router = express.Router()

const careerControllers = require('../controllers/career')

router.post('/post', careerControllers.post)
router.get('/get', careerControllers.get)
router.put('/put/:putId', careerControllers.putId)

module.exports = router;