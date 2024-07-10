require("dotenv").config();
const express=require("express");
const router=require("./router/index");
const morgan=require('morgan');
const cors=require('cors');

require("./db");

const PORT=process.env.PORT || 2010 
const app=new express();
 app.use(express.static("images"));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(express.urlencoded({extended :true}))
app.use('/',router);


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})