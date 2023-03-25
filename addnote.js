import React  from "react"
import './addnote.css'
import { Link } from "react-router-dom"
const Addnote=()=>
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

        <div id="notecont">

<div>
 <h1>Title</h1>
 <input placeholder="Title"/>
 </div>


 <div id="des">
<h1>Description</h1>
<input placeholder="what's on your mind"/>
</div>
<button>Add Note</button>
</div>

           </div>

    )
    
}
export default Addnote

