const express = require('express');
const app = express();
const indexRouter = require('./Routes/index')
const userRouter = require('./Routes/user')
const methodOverride = require('method-override');

const PORT = 3000; 

app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/notpotions', userRouter)

app.listen(PORT, () => console.log('I am working'));

