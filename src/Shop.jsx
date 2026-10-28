import { useState, useEffect } from "react"

import "./Shop.css"

// Afficher une liste de produit depuis l'API fake store API

// Importer les hooks nécessaires -> useState et useEffect 
// Lors du chargement initial de la page afficher automatiqueme,nt la liste de produit depuis l'API

// Pour chaque produit on veut : son image, son nom, son prix et un bouton de type ajouter au panier

// Dès qu'on clique sur l'ajout au panier l'item doit etre enregistré en Local Storage 


function Shop() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(window.localStorage.getItem("cart"))
        } catch {
            return []
        }
    }) 


    // TO DO :

    // Créer un state pour le panier (cart) qui pourra etre un tableau et initialisé comme tableau vide 
    
    // Autre useEffect qui viendra écouter le state "cart" (cart sera dans le tableau de dependance)
    // Quand le tableau cart change il est automatiquement sauvegardé en LS
    
    // Faire en sorte que lorsque l'on clique sur ajout au panier on ajoute bien le produit 
    // à notre tableau qui correspond au panier (ex : addToCart())


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

    // Fonction d'ajout au panier -> on vérifie si le produit à ajouter est déjà ou pas dans le panier 
    // Si oui on ajoute +1 à la quantité (qty) sinon on ajoute simplement le produit

    function addToCart(product) {    
        // On vient vérifier si le produit n'est pas dans le tableau sio c'est le cas on return true
        let boolArray = cart.map(item => {
            return (item.id === product.id) ? true : false
        })

        // On modifie le state du cart selon si le produit est déjà, ou pas, dans le panier
        setCart((prev) => {
                if (boolArray.includes(true)) {
                    return prev.map(item => (item.id === product.id) ? { ... item, qty: item.qty + 1 } : item )
                } else {
                    return [ ... prev, { ... product, qty : 1 }]
                }   
            }
        )
    }


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