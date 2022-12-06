const express = require('express');

const router = express.Router();

const healthArticlesControllers = require('../controllers/healtharticles');

router.post('/post', healthArticlesControllers.post)
router.get('/get', healthArticlesControllers.get)
router.put('/put/:putId', healthArticlesControllers.putById)

module.exports = router;
