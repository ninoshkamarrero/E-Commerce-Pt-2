import React from 'react';
import Product1 from './ProductImages/Product1.jpeg';
import Product2 from './ProductImages/Product2.JPG';
import Product3 from './ProductImages/Product3.JPG';
import Product4 from './ProductImages/Product4.JPG';
import Product5 from './ProductImages/Product5.JPG';
import Product6 from './ProductImages/Product6.jpeg';
import Product7 from './ProductImages/Product7.jpeg';
import Product8 from './ProductImages/Product8.JPEG';
import Product9 from './ProductImages/Product9.JPEG';
import Product10 from './ProductImages/Product10.jpeg';
import Product11 from './ProductImages/Product11.JPEG';
import Product12 from './ProductImages/Product12.JPEG';


function Products(){
    return(
        <>
            <div class="discountBanner">
        Free Shipping on all orders $50+ with code: beautiful
    </div>
    <nav>
        <ul>
            <li><a href="Home.html">Home</a></li>
            <li><a href="Products.html">Products</a></li>
            <li><a href="ContactUs.html">Contact Us</a></li>
          </ul>
    </nav>
    <div class="Hero"></div>
    <h2>Products</h2>
    <div class="productcontainer">
        <div class="product"> 
            <img src={Product1} alt="Product1"/>
            <div>Sphere Transparent Clutch with Pearl & Chain Handle</div>
            <p>Pearl Crystal Bag</p>
            <p>$20</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product2} alt="Product2"/>
            <div>Multi Color Mini Handle Bag</div>
            <p>Colorful Bag</p>
            <p>$25</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product3} alt="Product3"/>
            <div>Green Wired Drop Crystals Earrings</div>
            <p>Green Pearl Earrings</p>
            <p>$10</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product4} alt="Product4"/>
            <div>White Wired Drop Crystals Earrings</div>
            <p>White Pearl Earrings</p>
            <p>$10</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product5} alt="Product5"/>
            <div>Clear Handle Bag with Pearls</div>
            <p>Pearl Luxury Bag</p>
            <p>$30</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product6} alt="Product6"/>
            <div>Red Lip Clutch with long and short chain</div>
            <p>Red Lip Bag</p>
            <p>$28</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product7} alt="Product7"/>
            <div>Gold Lip Clutch with long and short chain</div>
            <p>Gold Lip Bag</p>
            <p>$28</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product8} alt="Product8"/>
            <div>Gold and Clear Acrylic Pendant with Crystal Bead in 18k</div>
            <p>Rudolph Earrings</p>
            <p>$12</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product9} alt="Product9"/>
            <div>Pearls and Rectangle Acrylic in 18k Gold Plated</div>
            <p>Black&White Earrings</p>
            <p>$12</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product10} alt="Product10"/>
            <div>Black Crystal Hoop in 18k Gold Plated</div>
            <p>Black Earrings</p>
            <p>$14</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product11} alt="Product11"/>
            <div>Freshwater Pearl in Twisted Gold Hook</div>
            <p>Twisted Pearl Earrings</p>
            <p>$18</p>
            <button>Buy Now</button><br/><br/>
        </div>
        <div class="product"> 
            <img src={Product12} alt="Product12"/>
            <div> Gold Plated Drop Chain with Pendant </div>
            <p>Bella Necklace</p>
            <p>$40</p>
            <button>Buy Now</button><br/><br/>
        </div>
    </div>
        </>
    );
}

export default Products;