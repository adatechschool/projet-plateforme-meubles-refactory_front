import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/icons/shopping-cart-button.png"; // Icône normale
import cartIconHover from "../../assets/icons/shopping-cart-button-hover.png"; // Icône au hover

function AddProduct({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!product || !product.id) {
      console.error("Erreur : Impossible d'ajouter le produit au panier, ID manquant.");
      return;
    }

    let cartIds = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cartIds.includes(product.id)) {
      cartIds.push(product.id);
      localStorage.setItem("cart", JSON.stringify(cartIds));
      console.log(`Produit ID ${product.id} ajouté au panier !`);
    } else {
      console.log(`Produit ID ${product.id} est déjà dans le panier.`);
    }

    // ✅ Rediriger vers la page panier après l'ajout
    navigate("/panier");
  };

  return (
    <div className="shopping-cart-container" onClick={handleAddToCart}>
      <img 
        src={cartIcon} 
        alt="Ajouter au panier" 
        className="shopping-cart-button"
        onMouseOver={(e) => e.currentTarget.src = cartIconHover}
        onMouseOut={(e) => e.currentTarget.src = cartIcon}
      />
    </div>
  );
}

export default AddProduct;
