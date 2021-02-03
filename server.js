const express = require('express');
const app = express();
const methodOverride = require('method-override');

const PORT = 3000; 


app.set('view engine', 'ejs')

app.get('/', function(req, res) {
res.send('Hello')
})

app.listen(PORT, () => console.log('I am working'));