const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  brewTime: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  directions: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
},
{
  timestamps: true
});


const Post = mongoose.model('Post', postSchema )

module.exports = Post;