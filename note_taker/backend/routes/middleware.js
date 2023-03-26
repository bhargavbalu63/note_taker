const jwt= require('jsonwebtoken')
module.exports= function(req,res,next)
{

try
{
const token= req.header('x-token')

if(!token)
{
    return res.status(400).send("token not found")
}

let decode = jwt.verify(token, 'jwtpassword')
req.user= decode.user
next()

// let decode = jwt.verify(token,'jwtpassword')
// req.user= decode.user
// next()

}
catch(err)
{
 
    
    res.status(400).send("authenticatin error")

}











}