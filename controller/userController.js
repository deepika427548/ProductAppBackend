const userModel = require("../models/user");
const { jwtToken } = require("../utils/jwt");
const signupJoi = require("../validation/signupjoival");
const bcrypt = require('bcrypt');



const signUp=async(req,res)=>{
    const data=req.body;
    console.log(data);
    const validatedData = await signupJoi.validateAsync(data);
    // hash the password
    const hash=await bcrypt.hash(validatedData.password,10)
    const newUserData=new userModel({email:validatedData.email,password:hash})
    await newUserData.save();
    res.status(200).send("New User Added Succesfully")

}

const logIn=async(req,res)=>{
   
    const data=req.body;
    const validatedData=await signupJoi.validateAsync(data);
      
    const user= await userModel.findOne({email:validatedData.email});
  
  console.log(user)

  if (!user) {
   return res.status(401).send({ status:false,message: "Invalid email ID or password" });
  }
  
  const valid_pass = await bcrypt.compare(validatedData.password, user.password);
  
  if (!valid_pass) {
   return res.status(401).send({ status:false,message: "Invalid email ID or password" });
  }
  const token=await jwtToken(user,valid_pass);//return a jwt token
  console.log("token:",token);

  res.status(200).send({ message: "Successfully logged in" ,token:token});
     
    

     
  

}


module.exports={signUp,logIn};