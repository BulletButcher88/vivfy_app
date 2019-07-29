const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });


const { 
  index,
  show,
  create, 
  edit, 
  destroy, 
  email, 
  uploadImage,
  editFollowup 
} = require('../controllers/jobController')

// Standard CRUD routes
router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', edit);
router.delete('/:id', destroy);

// Special routes
router.post('/email', email); // Mailgun automation route
router.post('/:id/image', upload.single('file'), uploadImage);
router.put('/:jId/followups/:fId', editFollowup)

module.exports = router;