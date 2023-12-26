import React from "react";
import { useSelector  } from "react-redux";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import "../styles/Products.css";

function Products() {

    const products = useSelector(state => state.productsReducer.value); // products is an array

    const navigate = useNavigate();

    

    return (
        <>
            <Hero />

            <h1>PRODUCTS</h1>

            <div id="flex-container">
                {products.length > 0 && products.map((Product, index) => {
                    return (
                        <div id="flex-item" key={index}>

                            <div id="product-head">
                                <img onClick={() => navigate(`/details/${Product.id}`)}
                                    src={Product.thumbnail}
                                    alt={Product.id + " image"}>
                                </img>

                                <h2>{Product.title}</h2>
                            </div>

                            <div id="product-info">
                                <h2>
                                    <span id="dolar-span">$</span>
                                    {Product.price}
                                </h2>

                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
};

export default Products;
