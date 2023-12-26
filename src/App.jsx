import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/features/products/productsSlice";
import Navbar from "./components/Navbar";

import Products from "./components/Products";
import Details from "./components/Details";
import ShoppingCart from "./components/ShoppingCart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "../src/styles/App.css";

function App() {

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])


  return (

    <Router>

      

      <Navbar />

      <Routes>
        <Route path="/" element={ <Products />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>

    </Router>
  )
};

export default App;
