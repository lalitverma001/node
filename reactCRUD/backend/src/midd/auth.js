const jwt=require('jsonwebtoken');
const Register=require('../schema/register');

const auth=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        //  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4OTIzODg3OWY0NjYxNmQ1OWRmMDkiLCJpYXQiOjE2MzEwOTg5MDh9.IUarIjv2iszOtAVtxrUs4sjIve5gOWbsfLlhR7Y351g";
        const verifyUser=jwt.verify(token,process.env.SECRET_KRY)
        console.log(verifyUser);
        next();
    } catch (error) {
        console.log(error);
    }
}
module.exports=auth;