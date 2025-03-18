import '../styles/CartItem.css';

function CartItem({ item, onRemove }) {
  return (
    <div>
      <h2 className='title-panier'>Votre panier</h2>
      <div className="border-bottom-h2"></div>

  <div className="cart-item-body">
    <img src={fauteuil} alt="" />
    <div className='cart-item-info'>

        <div className='titre titrePrix '>
          <p>{item.name}</p>
          <div className='cart-item-info-details prix'>
            <p>{item.price}€</p>
          </div>
        </div>

        <div className='cart-item-info-groupe'>
          <div className='cart-item-info-details div1'>
            <p className="titre">Catégorie:</p> 
            <p>{item.category || "Non spécifiée"}</p>
          </div>

          <div className='cart-item-info-details div2'>
            <p className="titre">Couleur:</p>
            <p>{item.color || "Non spécifiée"}</p>
          </div>

          <div className='cart-item-info-details div3'>
            <p className="titre">Quantité:</p>
            <p>1</p>
          </div>
        </div>

        <div  className='cart-item-info-details div2'>
          <p className="titre">Couleur:</p>
          <p> Noir</p>
        </div>

        <div  className='cart-item-info-details div3'>
          <p className="titre">Quantité: </p>
          <p>1</p>
        </div>
      </div>
        <button className='buttonRemove'><img src={poubelle} alt="" /></button> 
        
      </div>
    </div>
    
  
  );
}

export default CartItem;
