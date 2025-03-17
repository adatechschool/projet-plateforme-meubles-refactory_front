import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProduct from "./addproduct";

// fetch('https://dummyjson.com/products')
//     .then((response) => {
//    return response.json()
//     })
//     response.then((result) => {
//         console.log(result)
// })



function CardItem({product}){
    const navigate = useNavigate();

    return(
        <div className="container-card">
        <img className="img-card" src={product.images} alt={product.name} />
        <AddProduct className="addproduct" product={product} />
        <div className="description-card">
            <div className="container-name-price-card">
            <p className="name-card">{product.name}</p>
            <p className="price-card">{product.price}€</p>
            </div>
            <p className="description-text-card">{product.description}</p>
        </div>
    </div>
    )

}

// let cart = JSON.parse(window.localStorage.getItem("cart")) || [];

// function addToCart(){
    
// }

export default CardItem 