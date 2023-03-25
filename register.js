import React, { useState } from "react"
import './register.css'
import axios from 'axios'
import { Link } from "react-router-dom"
const Register=()=>
{
const [data,setData]= useState({
    email:"",
    passowrd:"",
    confirmpassword:""
})
const [err, setErr]=useState("")
const [msg, setMsg]= useState("")
const changeHandler=(e)=>
{

setData({...data, [e.target.name]:e.target.value})



}

const submitHandler= (e)=>
{


e.preventDefault()
console.log(data);

  
    axios.post('/register',data).then((res)=>console.log(res)).then(setMsg("Registration successfull !!"))
    .catch((err)=>{
        console.log(err);
       err.message&& setErr(err.message)
       
    })

 setData({
    email:"",
    passowrd:"",
    confirmpassword:""
 })


}
  
    
    




    return(

        <div id="main">
<h1>Registration Page</h1>
<div id="container">

       
   <form onSubmit={submitHandler}>
    <label htmlFor="email">Email :</label>
    <input id="email" type={"email"} name="email" required={true} onChange={changeHandler} placeholder={"type your email"}/>
    <br/>
    <label htmlFor="password">Password :</label>
    <input id="password" type={"password"} name="password" onChange={changeHandler} required={true} placeholder={"type your password"}/>
    <br/>
    <label htmlFor="confirmpassword">Confirm password :</label>
    <input id="confirmpassword" type={"password"} name="confirmpassword" onChange={changeHandler} required={true} placeholder={"repeat password"}/>
    <br/>
      <button id="btn" type={"submit"}> Register</button>

      <p>already registered? <Link to="/login">Login</Link></p>
    </form>


    <h2>{err}</h2>
 {msg}
    </div>
        </div>
    )
    
}
export default Register