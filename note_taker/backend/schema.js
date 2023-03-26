const mongoose = require('mongoose')


const schema= new mongoose.Schema({

email:{type:String, required:true},
password:{type:Number, required:true},
confirmpassword:{type:Number, required:true}

})
const schemamodel= mongoose.model("taskschema", schema)
module.exports= schemamodel