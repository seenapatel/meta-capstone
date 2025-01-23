// import React from "react";
import logo from '../images/Logo.svg'
import {Link} from "react-router-dom";

function Nav() {
    return(
            <nav className="navbar" id="grid">
                <img src={logo} alt='logo' className='logo'></img>
                <ul className='navtext'>
                    <li className='toplist'><Link to="/"><a href="">Home</a></Link></li>
                    <li className='toplist'><a href="">About</a></li>
                    <li className='toplist'><a href="">Menu</a></li>
                    <li className='toplist'><Link to="/booking"><a href="">Reservations</a></Link></li>
                    <li className='toplist'><a href="">Order Online</a></li>
                    <li className='toplist'><a href="">Login</a></li>
                </ul>
            </nav>
    )
}

export default Nav;