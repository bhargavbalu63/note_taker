const express= require('express')

const router= express.Router()


const taskschema= require('../schema')


router.get("/register", async (req,res)=>
{
  try
  {
   
    const exist= await taskschema.find()




     res.status(200).send({
        data:exist
     })
 


  }catch(err)
    {
        res.status(404).send({
            error:err
        })
    }

})
module.exports= router