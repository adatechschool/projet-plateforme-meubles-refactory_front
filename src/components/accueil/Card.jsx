
import { useNavigate } from 'react-router-dom';
import AddProduct from "./addproduct";

function Card({ product }) {
    const navigate = useNavigate();

    return (
        <div className="container-card transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:shadow-lg"
        onClick={() => navigate(`/product/${product.id}`)}>
            {/* Conteneur de l'image avec l'icône du panier */}
            <div className="image-container">
                <img className="img-card" src={product.images} alt={product.name} />
                <AddProduct product={product} /> {/* L'icône est bien positionnée ici */}
            </div>

            <div className="description-card">
                <div className="container-name-price-card">
                    <p className="name-card">{product.name}</p>
                    <p className="price-card">{product.price}€</p>
                </div>
                <div className='description-card-details'>
                <p className="description-text-card">{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
