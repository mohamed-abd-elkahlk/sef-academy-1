
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () =>
{
    
    return (
        <nav className="nav1">
            <NavLink  to ="/home" >Home</NavLink>
            
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/card">Card</NavLink>
             <NavLink to="/date">Date</NavLink>

            </nav>
           
    )
    
}

export default Header;