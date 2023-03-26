const express= require('express')

const router= express.Router()
const middleware= require('./middleware')

const taskschema= require('../schema')


router.post("/home",middleware, async (req,res)=>
{
  try
  {
  
    const exist= await taskschema.find()

 
    res.status(200).send({
        message: exist
       
    })
    

  }catch(err)
    {
        res.status(404).send({
            error:err
        })
    }

})
module.exports= router