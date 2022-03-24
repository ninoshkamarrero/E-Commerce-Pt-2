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

function App() {
  return (
    <Router>
    <div className='App'>
       
  
        <Navbar />
        {/* <ImageSlider slides={SliderInfo} /> */}
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        </Routes>
        <Footer />

      </div>
    </Router>

  );

}




export default App;