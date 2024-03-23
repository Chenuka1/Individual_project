import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.module.css'

const Navbar = () =>{


    return(
       <div>
        <nav>

            <ul>

          <li><Link to="/home">Home</Link></li>
          <li><Link to="/register">Add patients</Link></li>
          <li><Link to="/users">patients</Link></li>
          <li><Link to="/">Login</Link></li>
    

             </ul>
        </nav>
        







       </div>
    )
}

export default Navbar;