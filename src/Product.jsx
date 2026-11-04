import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

// Dans cette page Produit on va afficher les détails pour un produit +

// On pourra recup l'id du produit dans l'URL faire un fetch et ainsi recup les infos à afficher 
// Pour recup l'id depuis l'URL vous pourrez utiliser useParams() -> hook qui vous permet de recup les params de l'url

function Product() {
    const [product, setProduct] = useState(null)

    // On recup le param depuis l'URL 
    const { id } = useParams()

    // Lors de chaque chargement initial de la page on effectue la requete pour recup les infos du produit
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
        .then(data => data.json())
        .then(result => {
            console.log(result)
            setProduct(result)
        }) 
        .catch(err => console.log(err))
    }, []) 

    return ( 
        <>
            <h1>Page de produit</h1>

            { product && 
                <>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <h2>{product.price} $</h2>
                    <h3>{product.description}</h3>
                    <button>Ajout au panier</button>
                </>
            }
        </>
    );
}

export default Product;