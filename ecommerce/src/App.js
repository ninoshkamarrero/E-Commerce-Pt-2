import React, {Component} from 'react'
import  './App.css';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route,Link, Routes, BrowserRouter} from "react-router-dom";
import Products from './Components/Products/Products';
import HomePage from './Components/HomePage/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer'

// import ImageSlider from './ImageSlider';
// import SliderInfo from './SliderInfo';

class App extends Component  {
    render(){
  return (
      <BrowserRouter>
      <Routes>
        <Navbar />
        {/* <ImageSlider slides={SliderInfo} /> */}
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Footer />
      </Routes>
     </BrowserRouter>

  );
}

}




export default App;