import { useNavigate } from "react-router-dom";

function AddProduct({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ajouter le produit
    cart.push(product);

    // Sauvegarder dans localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Produit ajouté :", cart); // Vérification

    // Rediriger vers la page panier
    navigate("/panier");
  };

  return (
    <button onClick={handleAddToCart}>Ajouter au panier</button>
  );
}

export default AddProduct;
