const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    }, 
    firstName: { 
    type: String,
    required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [{
      type: mongoose.Types.ObjectId,
      ref: 'Post',
    }],
    favorites: [{
      type: mongoose.Types.ObjectId,
    }]
  }, 
  {
    timestamps: true
  });


const User = mongoose.model('User', userSchema)


module.exports = User;