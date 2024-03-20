import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.module.css'

const Navbar = () =>{


    return(
       <nav>

        <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">patient register</Link></li>
            <li><Link to="/users">patients</Link></li>
            <li><Link to="/signup">Add midwives</Link></li>
            

        </ul>
       </nav>
    )
}

export default Navbar;