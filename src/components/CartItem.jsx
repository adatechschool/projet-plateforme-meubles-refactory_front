import '../styles/CartItem.css';
import fauteuil from '../img/behnam-norouzi-phXwnWWz-BM-unsplash.jpg';
import poubelle from'../assets/icons/trash-panier.png'

function CartItem() {
  return (
    <div>
      <h2 className='title-panier'>Votre panier</h2>
      <div className="border-bottom-h2"></div>

  <div className="cart-item-body">
    <img src={fauteuil} alt="" />
    <div className='cart-item-info'>

        <div className='titre titrePrix '>
          <p>Fauteuil moderne noir</p>
          <div className='cart-item-info-details prix'>
            <p>68.00€</p>
          </div>
        </div>
    <div className='cart-item-info-groupe'>
        <div  className='cart-item-info-details div1'>
          <p className="titre">Catégorie:</p> 
          <p> contemporain </p>
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
  </div>
  );
}
export default CartItem;