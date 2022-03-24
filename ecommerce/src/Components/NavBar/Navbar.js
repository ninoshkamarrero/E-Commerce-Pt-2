import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <nav>  
                <div class="discountBanner">
                    Free Shipping on all orders $50+ with code: beautiful
                </div>
                <ul>
                    <li><NavLink exact ={true} to ="/">Home</NavLink></li>
                    <li><NavLink exact ={true} to ="/Products">Products</NavLink></li>
                    <li><NavLink exact ={true} to ="/ContactUs">Contact Us</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;