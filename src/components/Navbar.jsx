import React from "react";
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';





import "../styles/Navbar.css";

function Navbar() {

    const products = useSelector(state => state.navbarReducer.value); // products is an array

    
    function numberOfProducts() {
        let number = 0;
        for (let i = 0; i < products.length; i++) {
            number += products[i].quantity;
        }
        return number;
    }

    const navigate = useNavigate();

    function handleClickIcon() {
        navigate("/");
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    function handleClickHandBag() {
        navigate("/shoppingCart");
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    return (
        <div id="navbar-container">
            <div id="icon"><MdHome id="icon-in-div" onClick={handleClickIcon} /></div>
            <FaShoppingCart id="hand-bag" onClick={handleClickHandBag} />
            <div id="number-of-products">{numberOfProducts()}</div>
        </div>
    )
};

export default Navbar;
