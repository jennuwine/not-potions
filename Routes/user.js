const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')
const postCtrl = require('../controllers/post')

router.get('/', userCtrl.homePage)
router.get('/addpotion', postCtrl.addPost)
router.get('/:id', postCtrl.viewPost)
router.get('/edit/:id', postCtrl.editPost)

router.post('/submitnewpotion', postCtrl.newPost)

router.put('/save/:id', postCtrl.updatePost)

router.delete('/:id', postCtrl.deletePost)

module.exports = router; 