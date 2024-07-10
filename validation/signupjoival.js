const Joi = require('joi');

const signupJoi = Joi.object({
    
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

    password: Joi.string(),
    repeat_password:Joi.ref('password')



   })

   module.exports=signupJoi;