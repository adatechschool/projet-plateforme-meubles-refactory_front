
import AddProduct from "./addproduct";
import { useNavigate } from 'react-router-dom';

function Card({ product }) {
    const navigate = useNavigate();

    return (
        <div 
            className="container-card transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            // onClick={() => navigate(`/product/${product.id}`)}
        >
            <img className="img-card" src={product.images} alt={product.name} />
            <AddProduct  product={product} />
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