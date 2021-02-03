const express = require('express')
const router = express.Router();


const homePage = (req, res) => {

    res.render('feed/userfeed')
}


module.exports = {
   homePage
 }