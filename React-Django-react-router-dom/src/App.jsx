import './App.css'
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);
  // 2. Create the function to update state
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return(
    <>
    <Header count={cartCount} />
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart}/>}></Route>
      <Route path="/shop" element={<Shop addToCart={addToCart}/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
} 
export default App;

