const express = require('express');
const router = express.Router();
const { checkAdmin, checkJWT } = require('../middleware/jwtMiddleware')

const {
  names,
  destroy,
  getSales,
  editUser
} = require('../controllers/userController')

router.get('/', names)
router.get('/sales', checkAdmin, getSales)
router.put('/:id', checkJWT, editUser)
router.delete('/:id', checkAdmin, destroy)

module.exports = router;