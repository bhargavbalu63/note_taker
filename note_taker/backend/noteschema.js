const mongoose= require("mongoose")

const schema= new mongoose.Schema({

title:{type:String, required:true},
content:{type:String, required:true},
date:{type:Date, default:Date.now()}
})
const noteschema= mongoose.model('noteschema', schema)
module.exports= noteschema