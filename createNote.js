const express= require('express')

const router= express.Router()


const noteschema= require('../noteschema')
router.get("/notes", async (req,res)=>
{
  try
  {



 
     const data=  await noteschema.find()



    return res.status(200).send({
        message: "note created",
        data:data
     })
 


  }catch(err)
    {
       return res.status(404).send({
            message:err
        })
    }

})

router.post("/addnote", async (req,res)=>
{
  try
  {
    const {title,content, date}= req.body


 
     const data= await  noteschema.create({
        title:title,
        content:content,
        date:date
     })


    return res.status(200).send({
        message: "note created",
        data:data
     })
 


  }catch(err)
    {
       return res.status(404).send({
            message:err
        })
    }
})
router.delete("/createnote/:id", async (req,res)=>
{
  try
  {
    const exist= await noteschema.findOneAndDelete({_id:req.params.id})


    return res.status(200).send({
        message: "note deleted",
        data:exist
     })
 


  }catch(err)
    {
      return  res.status(404).send({
            message:err
        })
    }

})

router.put("/createnote/:id", async (req,res)=>
{
  try
  {
    const exist= await noteschema.findOneAndUpdate({_id:req.params.id})

    if(!exist)
    {
        return res.status(404).send({
            message: "id not exist"
        })
    }

 
 


  }catch(err)
    {
     return    res.status(404).send({
            message:err
        })
    }

})








module.exports= router