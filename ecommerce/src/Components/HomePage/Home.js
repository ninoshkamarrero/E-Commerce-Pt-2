import React from 'react';
//import HomeSlider from './HomeSlider';
//import SliderPics from './SliderPics';
function Home() {
        return(
            <>
                    <div className="discountBanner">
                    Free Shipping on all orders $50+ with code: beautiful
                </div>
                    <div className="Hero">
                        <div className="HeroText">
                        <h1>Welcome To NiMar Boutique</h1>
                        </div>
                    </div>
                <div className="homeContainer">
                    <div className="homeImage"> 
                        <img src="/ecommerce/public/Images/Home_Images/nino.jpeg" alt="homeImage"/>
                        <hr size="5%" width="35%" color="pink"/> 
                        <h2>¡Hola!</h2>
                        <p>Welcome to my page! My name is Ninoshka. I am the face behind this wonderful boutique. I hope that everyone can enjoy my products that I make with a lot of love and dedication for all my clients. Thank you all for your support. </p>
                    </div>
                    </div>
            </>
);     
}  

export default Home;