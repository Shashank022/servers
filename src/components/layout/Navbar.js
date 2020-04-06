import React from 'react';
import { link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                    Server's Data</Link>
            </div>
        </nav>
    )
}


export default Navbar;