const express = require('express')
const router = express.Router();


const homePage = (req, res) => {
    res.send('Hey')

}

module.exports = {
   homePage
 
 }