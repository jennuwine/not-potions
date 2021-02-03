const express = require('express')
const router = express.Router();

const addPost = (req, res) => {
  res.render('newpost/newpostform')
}

const newPost = (req, res) => {
console.log('hello')
res.send('hi!')
}

module.exports = {
   addPost,
   newPost
 }

 