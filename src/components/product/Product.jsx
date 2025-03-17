import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Accordion from "./Accordion.jsx";
import Banner from "../Banner.jsx";
import Footer from "../accueil/Footer.jsx";
import '../../styles/Product.css';


export default function Product() {

    //console.log(import.meta.env.VITE_SERVER_URL)
    const { id } = useParams()
    console.log ("voici l'id", id)

    
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);
  

    useEffect(() => {
       
       
        const fetchData = async () => {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        const data = await response.json();
        //console.log(data)
    
        setProduct(data[0])
      
       
    };
    fetchData();
    }, []);
//fetchData();

console.log("mon produit", product);
//const cat_id = product.cat_id

// useEffect(() => {
//     const fetchCategory = async () => {
//         const response = await fetch (`http://localhost:3000/products/`)
//     }
// })
    //useState pour instancier un produit
    //useEffect pour recuperer tous les attributs d un produit et les passer au setProduct du useState pour creer la const produit


    return (
        <div className="product-page">
            <Banner />
    
            {/* Vérification que product existe avant de tenter d'accéder à ses propriétés */}
            {product? (
                <>
                    <div className="product-info">
                        <div className="product-category">TO DO</div>
                        <h1 className="product-title">{product.name}</h1>
    
                        <div className="product-pricing">
                            <p className="price">{product.price}</p>
                            <p className="delivery-info">Livraison en 3 jours</p>
                        </div>
    
                        <div className="product-actions">
                            <button className="btn-add-to-cart">Ajouter au panier</button>
                            <button className="btn-buy-now">J’achète !</button>
                        </div>
                    </div>
    
                    <div className="product-accordions">
                        <Accordion title="Description" key="description">
                            <p className="accordion-content">{product.description}</p>
                        </Accordion>
    
                        <Accordion title="Dimensions" key="dimensions">
                            {product.size}
                        </Accordion>
    
                        <Accordion title="Livraison" key="livraison">
                            <p className="accordion-content">
                                Délais de livraison: 3-5 jours ouvrés<br />
                                Retours acceptés sous 30 jours
                            </p>
                        </Accordion>
                    </div>
                </>
            ) : (
                <p>Chargement du produit...</p>
            )}
    
            <Footer />
        </div>
    );
}    