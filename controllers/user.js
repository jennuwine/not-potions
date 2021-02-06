const express = require('express')
const router = express.Router();
const db = require('../models')


const homePage = async (req, res) => {
    const posts = await db.post.find({})
    res.render('feed/userfeed', {posts: posts})

}















module.exports = {
   homePage,

  
 };