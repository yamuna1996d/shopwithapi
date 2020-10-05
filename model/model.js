var mongoose = require('mongoose');
const proSchema=new mongoose.Schema({
    url:String,
    title:String,
    price:Number
});
const model=mongoose.model('pics',proSchema);
module.exports= {model}