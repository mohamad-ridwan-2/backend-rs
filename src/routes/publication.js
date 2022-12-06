const express = require('express')

const router = express.Router();

const publicationControllers = require('../controllers/publication')

router.post('/post', publicationControllers.post)
router.get('/get', publicationControllers.get)

module.exports = router;