const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notpotions', { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});

module.exports = {
    user: require('./user'),
    post: require('./post')
}