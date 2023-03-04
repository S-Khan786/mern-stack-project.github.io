const express = require('express');
var app = express();

const router = express.Router();

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/mernauth', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){

    if(err)
    {
        console.log(err);

    }else {
        console.log('MongoDB Connection is Successful');
    }
});

var Usermodel = mongoose.model('user', {name:String, username: String, password: String});

router.post('/registeruser', function(req, res) {


     var newuser = new Usermodel({name:req.body.name, username:req.body.username, password:req.body.password});

     newuser.save(function(err){

        if(err) {
            res.send('Something went wrong');
        }
        else {
            res.send('User registration is Successful');
        }

     });

});

router.post('/loginuser', function(req, res) {

    Usermodel.find({
        username: req.body.username,
        password: req.body.password
    }, function(err, documents) {
        
        if(err){
            res.send('Something went wrong');
        }
        else{

            if(documents.length == 0) {
                
                res.send('Login Failed');
            }
            else {
                res.send('Login Successful');
            }
        }
    })
});

router.post('/getusers', function(req, res) {

    Usermodel.find({}, function(err, documents){

        if(err) {
            res.send('Something went wrong');
        }
        else {
            res.send(documents);
        }
    })
});

module.exports = router;