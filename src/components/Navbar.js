import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {  
return (
     <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
          <a to="/" class="navbar-brand">
                <img src="\newswebsite\src\components\logo.jpg" height="28" alt="logo"/>
            </a>
             <Link className="navbar-brand text-white fw-bold " to="">NEWS Point</Link>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link text-white" to="/sports">Sports</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link text-white" to="/education">Education</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link text-white" to="/business">Business</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link text-white" to="/technology">Technology</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link text-white" to="/health">Health</Link>
             </li>
             </ul>
             <li>
             <Link className="nav-link text-light fw-bold " to="/login">Login</Link>
             </li>
            
      
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <form className="d-flex" role="search" >
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-success" type="submit">Search</button>
           </form>
         </div> */}
         </div>
        </div>
 </nav>
   )
}

export default Navbar
