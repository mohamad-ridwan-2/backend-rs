const express = require('express')

const router = express.Router();

const disclaimerControllers = require('../controllers/disclaimer')

router.post('/post', disclaimerControllers.post)
router.get('/get', disclaimerControllers.get)

module.exports = router;