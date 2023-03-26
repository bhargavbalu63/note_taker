import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"

import './login.css'

const Login=()=>
{
const [data,setData]= useState({
    email:"",
    passowrd:"",

})


const [auth, setAuth]=useState(false)
const changeHandler=(e)=>
{

setData({...data, [e.target.name]:e.target.value})



}

const submitHandler= async (e)=>
{


e.preventDefault()

try{
    console.log(data);
    let options= {method:"POST",
    body:JSON.stringify(data),
    headers:{"Content-Type":"application/json"}
    }
     await fetch("/login", options).then(res=>res.json()).then((data)=>{
        localStorage.setItem("token", data.token)
         })
         setAuth(true)
}catch(err)
{

}

   
}

if(auth)
{
<Navigate to ="/dashboard" />
}


   




    return(

        <div id="main">
<h1>Login Page</h1>
<div id="container">

       
   <form onSubmit={submitHandler}>
    <label htmlFor="email">Email :</label>
    <input id="email" type={"email"} name="email" required={true} onChange={changeHandler} placeholder={"type your email"}/>
    <br/>
    <label htmlFor="password">Password :</label>
    <input id="password" type={"password"} name="password" onChange={changeHandler} required={true} placeholder={"type your password"}/>
    <br/>
   <br/>
      <button id="btn" type={"submit"}><Link to="/dashboard"> Login</Link></button>
      <p>
      <Link  to="/register">back to registration page</Link>
      </p>
    </form>
   
    </div>
  
        </div>
    )
    
}
export default Login