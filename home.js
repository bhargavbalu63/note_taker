import React from "react"
import {Link } from 'react-router-dom';
import './home.css'

const Home=()=>
{


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
<div >


<div id="big" style={{marginTop:"80px"}}>
 <button style={{width:"300px", height:"100px",borderRadius:"20px", backgroundColor:"greenyellow",fontSize:"30px"}}><Link to="/register" >Register</Link></button>
</div>

<div>
     <button style={{width:"300px",marginTop:"80px", height:"100px", borderRadius:"20px", backgroundColor:"cyan", fontSize:"30px"}}> <Link to="/login" >Login</Link>  </button> 
</div>
</div>
        </div>
    )
    
}
export default Home