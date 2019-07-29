const express = require('express');
const router = express.Router();

const { checkJWT } = require('../middleware/jwtMiddleware.js')
const { login, register, identify } = require('../controllers/authController');

router.get('/identify-me', checkJWT, identify)
router.post('/login', login);
router.post('/register', register);

module.exports = router;