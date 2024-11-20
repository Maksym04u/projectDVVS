const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Routes
router.get('/', postController.getAllPosts);
router.get('/create', postController.createPostPage);
router.post('/create', postController.createPost);
router.get('/edit/:id', postController.editPostPage);
router.post('/edit/:id', postController.editPost);
router.post('/delete/:id', postController.deletePost);

module.exports = router;
