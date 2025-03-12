function DetailCommand(){
    return (
        <div>
        <div className="container-detail-command">
            <h2>détail de votre commande</h2>
            <div className="border-bottom-h2"></div>

            <div className="display-nb-article">
                <p className="subtitle">Nombre d'articles :</p>
                <p>4</p>
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
                {/* <p className="livraison">Livraison en 3 jours :</p> */}
                <p>30,00 €</p>
            </div>
                <div className="border-bottom-delivery"></div>
            <div className="display-total">
                <p className="total">Total</p>
                <p className="total">68,00 €</p>
            </div>
            <button className="payment-button">Valider</button>
            <div>
                <p>Code promo</p>
                <div className="code-promo">
                    Entrez votre code promo
                </div>
            </div>
        </div>
        </div>
    )
}

export default DetailCommand