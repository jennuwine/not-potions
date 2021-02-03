const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')
const postCtrl = require('../controllers/post')

router.get('/', userCtrl.homePage)
router.get('/addpotion', postCtrl.addPost)
router.get('/:id', postCtrl.viewPost)

router.post('/submitnewpotion', postCtrl.newPost)

router.delete('/:id', postCtrl.deletePost)

module.exports = router; 