import { useState, useEffect } from "react"

import "./Shop.css"

// Afficher une liste de produit depuis l'API fake store API

// Importer les hooks nécessaires -> useState et useEffect 
// Lors du chargement initial de la page afficher automatiqueme,nt la liste de produit depuis l'API

// Pour chaque produit on veut : son image, son nom, son prix et un bouton de type ajouter au panier

// Dès qu'on clique sur l'ajout au panier l'item doit etre enregistré en Local Storage 


function Shop() {
    const [products, setProducts] = useState([])

    // Créer un state pour le panier (cart) qui pourra etre un tableau et initialisé comme tableau vide 

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

    // Autre useEffect qui viendra écouter le state "cart" (cart sera dans le tableau de dependance)
    // Quand le tableau cart change il est automatiquement sauvegardé en LS

    // Faire en sorte que lorsque l'on clique sur ajout au panier on ajoute bien le produit 
    // à notre tableau qui correspond au panier (ex : addToCart())

    return ( 
    <>
        <h1>Mon eShop en React</h1>

        <section className="eshop-grid">

            {products.length && products.map((product) => (
                <div className="product" key={product.id} >
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <h3>{product.price} $</h3>

                    <button>Ajouter au panier</button>
                </div>
            ))}
        
        </section>
    </>
    );
}

export default Shop;