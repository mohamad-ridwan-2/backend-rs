const express = require('express');

const router = express.Router();

const galleryControllers = require('../controllers/gallery')

router.post('/post', galleryControllers.post)
router.get('/get', galleryControllers.get)

module.exports = router;