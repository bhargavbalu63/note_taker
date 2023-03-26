const express= require('express')
const mongoose= require('mongoose')
const app= express()
const bodyparser= require('body-parser')
const cors = require('cors')
app.use(bodyparser.json())
app.use(express.json())
app.use(cors())
app.use(cors({origin:'*'}))

const register= require('./routes/register')
const getRoute= require('./routes/getRoute')
const login= require('./routes/login')
const home= require('./routes/home')

const createNote= require('./routes/createNote')

app.use('/', register)
app.use('/', login)
app.use('/', getRoute)
app.use('/', home)
app.use('/', createNote)








mongoose.connect('mongodb+srv://bhargavbalu63:9848032919@cluster0.fg2twzd.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true} )
mongoose.connection.on("connected", ()=> console.log("connected to db"))


app.listen("5000", ()=>console.log("server is up"))
