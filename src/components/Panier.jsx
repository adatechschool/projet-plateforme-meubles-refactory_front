import { useState, useEffect } from 'react';
import Banner from './Banner';
import CartItem from './CartItem';
import DetailCommand from './DetailCommand';
import '../styles/Panier.css';
import Footer from "../components/accueil/Footer";

function Panier() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const cartIds = JSON.parse(localStorage.getItem("cart")) || [];

        if (cartIds.length === 0) {
          setCart([]);
          setLoading(false);
          return;
        }

        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error(`Erreur serveur: ${response.status}`);
        }

        const allProducts = await response.json();
        const cartProducts = allProducts.filter((p) => cartIds.includes(p.id));

        setCart(cartProducts);
      } catch (err) {
        setError("Impossible de récupérer les produits du panier.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, []);

  const removeFromCart = (id) => {
    let updatedCartIds = JSON.parse(localStorage.getItem("cart")) || [];
    updatedCartIds = updatedCartIds.filter((cartId) => cartId !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCartIds));

    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Banner />
      <div className='container-cart'>
        <div className='cart-list'>
          <h1>VOTRE PANIER</h1>
          {loading && <p>Chargement du panier...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && cart.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => removeFromCart(item.id)}
              />
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className='detail-command-container'>
            <DetailCommand cart={cart} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Panier;