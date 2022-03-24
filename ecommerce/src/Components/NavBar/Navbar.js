import React from 'react';
//import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <nav>  
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="Products.html">Products</a></li>
                    <li><a href="ContactUs.html">Contact Us</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;