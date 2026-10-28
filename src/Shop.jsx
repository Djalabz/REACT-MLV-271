import { useState, useEffect } from "react"

import "./Shop.css"

import { ShopContext } from "./context/ShopContext"
import { useContext } from "react"

// Afficher une liste de produit depuis l'API fake store API

// Importer les hooks nécessaires -> useState et useEffect 
// Lors du chargement initial de la page afficher automatiqueme,nt la liste de produit depuis l'API

// Pour chaque produit on veut : son image, son nom, son prix et un bouton de type ajouter au panier

// Dès qu'on clique sur l'ajout au panier l'item doit etre enregistré en Local Storage 


function Shop() {
    let { products, setProducts, cart, addToCart } = useContext(ShopContext)

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
        <h1>Mon eShop en React</h1>

        <section className="eshop-grid">

            {products.length && products.map((product) => (
                <div className="product" key={product.id} >
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <h3>{product.price} $</h3>

                    <button onClick={() => addToCart(product)}>Ajouter au panier</button>
                </div>
            ))}
        
        </section>
    </>
    );
}

export default Shop;