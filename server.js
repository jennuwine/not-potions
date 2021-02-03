const express = require('express');
const app = express();
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const methodOverride = require('method-override');

const PORT = 3000; 

app.set('view engine', 'ejs')
app.use( express.urlencoded({ extended: true }) );
app.use('/', indexRouter)
app.use('/notpotions', userRouter)

app.listen(PORT, () => console.log('I am working'));

