const express= require('express')

const router= express.Router()


const taskschema= require('../schema')


router.post("/register", async (req,res)=>
{
  try
  {
    const {email,password, confirmpassword}= req.body
    const exist= await taskschema.findOne({email})

      if(exist)
      {

        return res.status(200).send(
            {
                message:'user already exist'
            }
        )
      }

    if(password!=confirmpassword)
    {
        return res.status(200).send(
            {
                message:'password mismatch'
            }
        )
    }



     const data=  taskschema.create({
        email:email,
        password:password,
        confirmpassword:confirmpassword
     })


     res.status(200).send("user registed succesfully")
 


  }catch(err)
    {
        res.status(404).send({
            message:err
        })
    }

})
module.exports= router