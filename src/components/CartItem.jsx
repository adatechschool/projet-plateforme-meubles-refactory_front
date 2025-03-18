import '../styles/CartItem.css';

function CartItem({ item, onRemove }) {
  // "item" contient tout : id, name, price, category, material_id, colour_id, images, etc.
  // Vérifie dans la console :
  console.log("Produit du panier :", item);

  return (
    <div className="cart-item-body">
      {/* Afficher l’image s’il y en a une, sinon fallback */}
      <img
        src={item.images || "https://via.placeholder.com/150"}
        alt={item.name}
        className="cart-item-img"
      />

      <div className='cart-item-info'>
        {/* Nom et prix */}
        <div className='titre titrePrix'>
          <p>{item.name}</p>
          <div className='cart-item-info-details prix'>
            <p>{item.price}€</p>
          </div>
        </div>

        {/* Afficher la catégorie s’il y en a une */}
        <div className='cart-item-info-groupe'>
          <div className='cart-item-info-details div1'>
            <p className="titre">Catégorie:</p> 
            <p>{item.category_id || "Non spécifiée"}</p>
          </div>

          {/* Material ID ou le nom du matériau s’il existait */}
          <div className='cart-item-info-details div2'>
            <p className="titre">Matière :</p>
            <p>{item.material_id || "Non spécifié"}</p>
          </div>

          {/* Colour ID ou une valeur par défaut */}
          <div className='cart-item-info-details div3'>
            <p className="titre">Couleur :</p>
            <p>{item.colour_id || "Non spécifiée"}</p>
          </div>
        </div>

        {/* Bouton de suppression */}
        <button className='buttonRemove' onClick={onRemove}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default CartItem;
