import truckIcon from '../assets/icons/delivery-truck.png';

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function DetailCommand(){
    return (
        <div>
        <div className="container-detail-command">
            <h2 className='detail-title'>détail de votre commande </h2>
            <div className="border-bottom-h2"></div>

            <div className="display-nb-article">
                <p className="subtitle">Nombre d'articles :</p>
                <p>{cart.length}</p>
            </div>
            <div className="display-subtitle">
                <p className="subtitle">Sous-total :</p>
                <p>68 €</p>
            </div>
            <div className="display-tva">
                <p className="subtitle">T.V.A :</p>
                <p>20 %</p>
            </div>
            <div className="display-delivery">
                <p className="subtitle">Frais de livraison :</p>
                <p>30,00 €</p>
            </div>
            <div className="delivery-info">
                <img src={truckIcon} alt="Livraison" className="truck-icon" />
                <span>Livraison en 3 jours</span>
            </div>
                <div className="border-bottom-delivery"></div>
            <div className="display-total">
                <p className="total">Total</p>
                <p className="total :">68,00 €</p>
            </div>
            <div className="button-container">
                <button className="payment-button">Valider</button>
            </div>
            <div>
                <p className="subtitle-code-promo">Code promo</p>
                <div>
                <input className="code-promo" placeholder='Entrez votre code promo' />
                </div>
            </div>
        </div>
        </div>
    )
}

export default DetailCommand