import { useNavigate } from "react-router-dom";

function AddProduct({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!product || !product.id) {
      console.error("Erreur : Impossible d'ajouter le produit au panier, ID manquant.");
      return;
    }

    // Récupérer le tableau d'IDs depuis localStorage
    let cartIds = JSON.parse(localStorage.getItem("cart")) || [];

    // Ajouter l’ID si pas déjà présent
    if (!cartIds.includes(product.id)) {
      cartIds.push(product.id);
    } else {
      console.log(`Produit ID ${product.id} déjà présent dans le panier.`);
    }

    // Mettre à jour localStorage
    localStorage.setItem("cart", JSON.stringify(cartIds));

    console.log(`Produit ID ${product.id} ajouté au panier !`, cartIds);

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
