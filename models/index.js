const mongoose = require('mongoose')

const connectString = 'mongodb://127.0.0.1:27017/notpotions'

mongoose.connect ( connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() => console.log('Mongodb connected...'))
.catch((err) => console.log('Mongodb error...')) ;

mongoose.connection.on('disconneted', (err) => console.log(err));

module.exports = {
    user: require('./user'),
    post: require('./post')
}