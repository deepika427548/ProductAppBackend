const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    serial_no:String,
    title:String,
    Description:String,
    image:String,
    price:String,
    quantity:String
    
},{timestamps:true,})

const productModel= mongoose.model('product',productSchema);
module.exports=productModel;