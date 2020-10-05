var express = require('express');
var parser =require('body-parser');
var mongoose=require('mongoose');
var app=express();
var router = require('./routes/route');

app.use(parser.urlencoded({extended:false}));
app.use('/pro',router);

mongoose.connect("mongodb+srv://userdb:userdb@cluster0.cbpmm.mongodb.net/<dbname>?retryWrites=true&w=majority");
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started");
});