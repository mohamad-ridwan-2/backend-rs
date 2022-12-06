const express = require('express')

const router = express.Router();

const footerControllers = require('../controllers/footer')

router.post('/post', footerControllers.post)
router.post('/post/footer-two', footerControllers.postFooterTwo)
router.get('/get', footerControllers.get)

module.exports = router;