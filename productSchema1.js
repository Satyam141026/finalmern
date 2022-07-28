const mongoose=require('mongoose');
const productSchema1 = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    img:String
  
  });
  module.exports=mongoose.model("student",productSchema1);