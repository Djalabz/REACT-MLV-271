import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import "./Shop.css"

import { ShopContext } from "./context/ShopContext"
import { useContext } from "react"


function Shop() {
    let { products, setProducts, cart, addToCart } = useContext(ShopContext)

    let navigate = useNavigate()

    // On veut afficher les produits depuis FSA lors du chargement initial seulement 
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        })
        .catch(err => console.log(err))
    }, [])

    // Lorsque le state de cart est modifié on enregistre le tableau en LS 
    useEffect(() => (
       window.localStorage.setItem("cart", JSON.stringify(cart)) 
    ), [cart]) 


    return ( 
    <>
        <h1 className="text-xl text-grey-600">Mon eShop en React</h1>

        <section className="eshop-grid">

            {products.length && products.map((product) => (
                <div className="product" key={product.id} >

                    <div onClick={() => navigate("/product/" + product.id)} className="clickable">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <h3>{product.price} $</h3>
                    </div>

                    <button onClick={() => addToCart(product)}>Ajouter au panier</button>
                </div>
            ))}
        
        </section>
    </>
    );
}

export default Shop;