import { createContext, useState } from "react";

// 1 - On crée le contexte, vide au départ, avec createContext
export const ShopContext = createContext()

// 2 - On vient créer le "Provider" ou fournisseur du contexte
// On entourera les éléments auxquels on veut partager les données du provider 
export const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(window.localStorage.getItem("cart"))
        } catch {
            return []
        }
    }) 

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

    let values = {
        products, setProducts, 
        cart, setCart, addToCart
    }

    return <ShopContext.Provider value={values}>{ children }</ShopContext.Provider>
}

