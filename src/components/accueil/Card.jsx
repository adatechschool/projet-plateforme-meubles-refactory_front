import { useNavigate } from 'react-router-dom';

function Card({ product }) {
    const navigate = useNavigate();

    return (
        <div 
            className="container-card transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:shadow-lg"
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <img className="img-card" src={product.images} alt={product.name} />
            <button className="shopping-cart-button" onClick={(e) => {
                e.stopPropagation(); // Empêche la propagation du clic vers le container
                navigate('/panier');
            }}></button>
            <div className="description-card">
                <div className="container-name-price-card">
                    <p className="name-card">{product.name}</p>
                    <p className="price-card">{product.price}€</p>
                </div>
                <p className="description-text-card">{product.description}</p>
            </div>
        </div>
    );
}

export default Card;

