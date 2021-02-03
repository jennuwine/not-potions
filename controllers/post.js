const express = require('express')
const router = express.Router();
const db = require('../models')

const addPost = (req, res) => {
  res.render('newpost/newpostform')
}

// const newPost = async (req, res) => {
 
// }

module.exports = {
   addPost,
  //  newPost
 }

 