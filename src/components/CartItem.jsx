import '../styles/CartItem.css';

function CartItem({ item, onRemove }) {
  console.log("Produit affiché dans le panier :", item);

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

        {/* Informations supplémentaires */}
        <div className='cart-item-info-groupe'>
          {/* Catégorie */}
          <div className='cart-item-info-details div1'>
            <p className="titre">Catégorie:</p> 
            <p>{item.categories_name || "Non spécifiée"}</p>
          </div>

          {/* Matériau */}
          <div className='cart-item-info-details div2'>
            <p className="titre">Matière :</p>
            <p>{item.materials_name || "Non spécifié"}</p>
          </div>

          {/* Couleur */}
          <div className='cart-item-info-details div3'>
            <p className="titre">Couleur :</p>
            <p>{item.colors_name || "Non spécifiée"}</p>
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
