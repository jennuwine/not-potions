const express = require('express')
const router = express.Router();


const homePage = (req, res) => {
    res.render('feed/userfeed')

}

const addPotion = (req, res) => {
  res.render('newpost/newpostform')
}

module.exports = {
   homePage,
   addPotion
 }