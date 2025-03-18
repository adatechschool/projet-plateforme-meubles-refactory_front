import { useNavigate } from "react-router-dom";

function AddProduct({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Récupérer le tableau d'IDs depuis localStorage
    let cartIds = JSON.parse(localStorage.getItem("cart")) || [];

    // Ajouter l’ID si pas déjà présent
    if (!cartIds.includes(product.id)) {
      cartIds.push(product.id);
    }

    // Mettre à jour localStorage
    localStorage.setItem("cart", JSON.stringify(cartIds));

    // Rediriger vers la page panier
    navigate("/panier");
  };

  return (
    <button type="button" className="buttonAddProduct" onClick={handleAddToCart}>
      Ajouter au panier
    </button>
  );
}

export default AddProduct;
