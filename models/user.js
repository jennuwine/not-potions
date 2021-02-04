const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
    }, 
    firstName: { 
    type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    googleId: {
      type: String
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