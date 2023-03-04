const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const { append } = require('express/lib/response');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

const userroute = require('./route/userroute');

app.use('/api/user', userroute);

app.get('/', function(req, res){
    
    res.end('This is Backend');
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});