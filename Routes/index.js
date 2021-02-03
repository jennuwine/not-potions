const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/notpotions')
    })

module.exports = router; 