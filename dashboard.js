import React, { useEffect, useState } from "react"
import {Link } from 'react-router-dom';
import './dashboard.css'
import axios from "axios";
const Dashboard=()=>
{

const [data,setData]=useState("")

useEffect(()=>
{

axios.get('/notes',
{
   
    Headers:{"x-token":localStorage.getItem('token')}
}).then((res)=>setData(res.data)).then(console.log(data))

const data= data

 
},[])

    return(

        <div className="Homemain">

     <div id= "navbar">
        <div>
        <Link id="link" style={{color:"white"}} to="/">Home</Link> 
        </div>
  <div>
  <Link id="link" style={{color:"white"}} to="/addnote">+addnote</Link> 
  </div>
  <div>
    delete all
  </div>
  <div>
    export =
  </div>

     </div>
<div>
dashboard

{data.map((notes, index)=>
{
       return `<div key=${index}>
       <h1>${notes.title}</h1>
       <p>${notes.content}</p>
   </div>`
})}
   
 
 
   
       
   


</div>



        </div>
    )
    
}
export default Dashboard