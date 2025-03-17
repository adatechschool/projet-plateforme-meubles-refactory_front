import { useState, useEffect } from 'react';
import Banner from './Banner';
import CartItem from './CartItem';
import DetailCommand from './DetailCommand';
import '../styles/Panier.css';

function Panier() {
    const [cart, setCart] = useState([]);

    // Charger les produits du panier depuis localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // Supprimer un produit du panier
    const removeFromCart = (index) => {
        let updatedCart = [...cart];
        updatedCart.splice(index, 1);

        // Mettre à jour localStorage et l'état local
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    return (
        <div>
            <Banner />
            <div className='container-cart'>
                {cart.length === 0 ? (
                    <p>Votre panier est vide.</p>
                ) : (
                    cart.map((item, index) => (
                        <CartItem
                            key={index}
                            item={item}
                            onRemove={() => removeFromCart(index)}
                        />
                    ))
                )}
                {cart.length > 0 && <DetailCommand cart={cart} />}
            </div>
        </div>
    );
}

export default Panier;
