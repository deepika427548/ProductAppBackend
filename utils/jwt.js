var jwt = require('jsonwebtoken');
const secretKey=process.env.JWT_SECRET_KEY;


const jwtToken=async(user,password)=>{
    const userData={user,password};
    // const options={
    //     expiresIn:'1hrs',
    //     audience:'entri-user',
    //     issuer:'entri'
    // }

    let token =await jwt.sign(userData,secretKey);
    return token;
}

module.exports={jwtToken};