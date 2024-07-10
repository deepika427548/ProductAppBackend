const Joi = require('joi');

const productJoi = Joi.object({
    
    serial_no: Joi.string(),

    title: Joi.string().min(5).max(10).required(),
    Description: Joi.string().min(10).required(),
    image: Joi.string().required(),
    price: Joi.string().required(),
    quantity: Joi.string().required(),



   })
module.exports=productJoi;