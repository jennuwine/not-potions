const express = require('express')
const router = express.Router();
const db = require('../models')

const addPost = (req, res) => {
  res.render('newpost/newpostform')
}

 const newPost = async (req, res) => {
  await db.post.create(req.body,(err, createdPost) => {
  if(err) return res.redirect('/notpotions/addpotion')
  createdPost.save()
  console.log(createdPost)
  res.redirect('/notpotions');
 })
 
}

module.exports = {
   addPost,
   newPost
 }

