const express = require('express')
const router = express.Router();
const db = require('../models')

const addPost = (req, res) => {
  res.render('newpost/newpostform')
}

 const newPost = async (req, res) => {
   console.log(req.body)
  await db.post.create(req.body,(err, createdPost) => {
  if(err) return res.redirect('/notpotions/addpotion')
  createdPost.save()
  console.log(createdPost)
  res.redirect('/notpotions');
 })
 
 
}

const viewPost = async (req, res) => {
  const post =  await db.post.findOne({_id: req.params.id}) 
    console.log(post)
      res.render('feed/viewpost', {post:post})
  }


const deletePost = async (req, res) => {
  const post =  await db.post.findOneAndDelete({_id: req.params.id}) 

      res.redirect('/notpotions');
  }

const editPost =  async (req, res) => {
  console.log('booya')
  const post = await db.post.findById(req.params.id)
  res.render('newpost/editpost', {post: post})
}

const updatePost =  async ( req, res ) => {
const id = await req.params.id

db.post.findByIdAndUpdate( 
  id,
  {
    $set: {
      ...req.body
    },
  },
  {
    new: true
  },
  ( err, updatePost) => {
    if ( err ) return console.log( err );

    res.redirect(`/notpotions/${id}`)
  });
};




module.exports = {

   addPost,
   newPost,
   deletePost,
   viewPost,
   editPost,
   updatePost
 }


