import Accordion from "./product/Accordion.jsx";
import Banner from "./Banner.jsx";
import Footer from "./accueil/Footer.jsx";
import '../styles/Product.css';

export default function Product() {
    return (
        <div className="product-page">
            <Banner />

            {/* Nouvelle section produit */}
            <div className="product-info">
                <div className="product-category">FAUTEUIL / CONTEMPORAIN</div>
                <h1 className="product-title">FAUTEUIL MODERNE NOIR</h1>

                <div className="product-pricing">
                    <p className="price">59,00 €</p>
                    <p className="delivery-info">Livraison en 3 jours</p>
                </div>

                <div className="product-actions">
                    <button className="btn-add-to-cart">Ajouter au panier</button>
                    <button className="btn-buy-now">J’achète !</button>
                </div>
            </div>

            <div className="product-accordions">
                {/* Accordéon Description - Ajout d'une prop key */}
                <Accordion
                    title="Description"
                    key="description"
                >
                    <p className="accordion-content">
                        Remplacez ce texte par une description détaillée du produit...
                    </p>
                </Accordion>

                {/* Accordéon Dimensions */}
                <Accordion
                    title="Dimensions"
                    key="dimensions"
                >
                    <ul className="accordion-content">
                        <li>Hauteur: 85cm</li>
                        <li>Largeur: 75cm</li>
                        <li>Profondeur: 65cm</li>
                        <li>Poids: 15kg</li>
                    </ul>
                </Accordion>

                {/* Accordéon Livraison */}
                <Accordion
                    title="Livraison"
                    key="livraison"
                >
                    <p className="accordion-content">
                        Délais de livraison: 3-5 jours ouvrés<br />
                        Retours acceptés sous 30 jours
                    </p>
                </Accordion>
            </div>

            <Footer />
        </div>
    );
}