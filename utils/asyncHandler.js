const Joi = require('joi');
const asyncHandler=(fn)=> async(req,res,next)=>{

    try{
        await fn(req,res,next)
    }catch(error){
        if(error.isJoi) error.status=422
        res.status(error.status || 500).send({status:false,error:error.message})

    }
}

module.exports=asyncHandler