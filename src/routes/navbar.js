const express = require('express')

const router = express.Router();

const navbarControllers = require('../controllers/navbar')

router.post('/post', navbarControllers.post)
router.get('/get', navbarControllers.get)
router.put('/put/:putId', navbarControllers.putId)

module.exports = router;