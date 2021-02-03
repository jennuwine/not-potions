const express = require('express');
const session = require('express-session')
const app = express();
const passport = require('passport')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const methodOverride = require('method-override');
require('./models')
require('dotenv').config()

const PORT = 3000; 

app.set('view engine', 'ejs')

  
app.use( express.urlencoded({ extended: true }) );

app.use(session({
    secret: 'MAGIC',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use('/', indexRouter)
app.use('/notpotions', userRouter)

app.listen(PORT, () => console.log('I am working'));

