const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')
const postCtrl = require('../controllers/post')

router.get('/', userCtrl.homePage)
router.get('/addpotion', postCtrl.addPost)

//router.post('/submitnewpotion', postCtrl.newPost)

module.exports = router; 