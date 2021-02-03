const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')

router.get('/', userCtrl.homePage)
router.get('/addpotion', userCtrl.addPotion)

module.exports = router; 