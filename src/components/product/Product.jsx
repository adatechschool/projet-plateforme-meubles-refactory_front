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
  

    useEffect(() => {
       
       
        const fetchData = async () => {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        const data = await response.json();
        console.log("data", data)
    
        setProduct(data[0])
        console.log("data", data[0])
       
    };
    fetchData();
    }, []);
//fetchData();

console.log("mon produit", product);


    return (
        <div>
            <Banner />
            <div className="product-page">
            {/* Vérification que product existe avant de tenter d'accéder à ses propriétés */}
            {product? (
                <>
                    <div className="product-image">
                        <img className="image-card" src={product.images} alt={product.name} />
                    </div>

                    <div className="product-info">
                        <div className="product-category">CATÉGORIES : {product.categories_name}</div>
                        <h1 className="product-title">{product.name}</h1>
    
                        <div className="product-pricing">
                            <h2 className="price">{product.price}€</h2>
                            <p className="delivery-info">Livraison en 3 jours</p>
                        </div>
    
                        <div className="product-actions">
                            <button className="btn-add-to-cart">Ajouter au panier</button>
                        </div>
                        
                        <div className="product-accordions">
                        <Accordion title="Description" key="description">
                            <p className="accordion-content">{product.description}</p>
                        </Accordion>
    
                        <Accordion title="Dimensions" key="dimensions">
                            {product.size}cm
                        </Accordion>
    
                        <Accordion title="Livraison" key="livraison">
                            <p className="accordion-content">
                                Délais de livraison: 3-5 jours ouvrés<br />
                                Retours acceptés sous 30 jours
                            </p>
                        </Accordion>
                        </div>
                    </div>
    
                </>
            ) : (
                <p>Chargement du produit...</p>
            )}
            </div>
            <Footer />
        </div>
    );
}    