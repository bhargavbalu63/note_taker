const express= require('express')

const router= express.Router()
const jwt= require('jsonwebtoken')

const taskschema= require('../schema')


router.post("/login", async (req,res)=>
{
  try
  {
    const {email,password}= req.body
    const exist= await taskschema.findOne({email})

    if(!exist)
    {
          return res.status(404).send({
              message: " user not registered"
          })
    }
    if(password!= exist.password)
    {
        return res.status(400).send({
            message: "username or password is invalid"
        })
    }
    // res.status(200).send({
    //     message: "logged in successfully",
    //     id:exist.id,
    
    // })
    
let payload= {
    user:{
        id:exist.id
    }
}

jwt.sign(payload,"jwtpassword", {expiresIn:36000},

    (err,token)=>
    {
        if(err) throw err
        return res.json({token})
    }
)
 
  }catch(err)
    {
        res.status(404).send({
            error:err
        })
    }

})
module.exports= router