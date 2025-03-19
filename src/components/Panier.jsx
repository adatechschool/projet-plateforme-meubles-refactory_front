import { useState, useEffect } from 'react';
import Banner from './Banner';
import CartItem from './CartItem';
import DetailCommand from './DetailCommand';
import '../styles/Panier.css';
import Footer from "../components/accueil/Footer";

function Panier() {
  const [cart, setCart] = useState([]);       // Stocke les produits à afficher
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        // Récupérer les IDs des produits dans le panier depuis localStorage
        const cartIds = JSON.parse(localStorage.getItem("cart")) || [];

        if (cartIds.length === 0) {
          setCart([]);
          setLoading(false);
          return;
        }

        // Récupérer tous les produits depuis l'API
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error(`Erreur serveur: ${response.status}`);
        }

        const allProducts = await response.json();

        // Vérifier si l'API renvoie bien les bonnes données
        console.log("Produits récupérés :", allProducts);

        // Filtrer uniquement ceux dont l'ID est présent dans cartIds
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

  // Supprimer un produit du panier
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

        {/* Affichage du chargement ou de l'erreur */}
        {loading && <p>Chargement du panier...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Affichage du contenu du panier */}
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

        {/* Un composant pour finaliser la commande ou afficher un total */}
        {cart.length > 0 && <DetailCommand cart={cart} />}
      </div>
      <Footer />
    </div>
  );
}

export default Panier;
