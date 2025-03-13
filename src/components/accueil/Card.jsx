import { useNavigate } from 'react-router-dom';

//fetch('https://dummyjson.com/products')
//    .then((response) => {
//   return response.json()
//    })
//    response.then((result) => {
//        console.log(result)
//})

function Card(){
    const navigate = useNavigate();

    return (
        <div className="container-all-cards">
        <div className="container-card">
            <div className="img-card"></div>
            <button className="shopping-cart-button" onClick={() => navigate('/detailcommand')}></button>
            <div className="description-card">
                <div className="container-name-price-card">
                <p className="name-card">Fauteuil noir</p>
                <p className="price-card">39,00 €</p>
                </div>
                <p className="description-text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="container-card">
            <div className="img-card"></div>
            <button className="shopping-cart-button"></button>
            <div className="description-card">
                <div className="container-name-price-card">
                <p className="name-card">Fauteuil noir</p>
                <p className="price-card">39,00 €</p>
                </div>
                <p className="description-text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="container-card">
            <div className="img-card"></div>
            <button className="shopping-cart-button"></button>
            <div className="description-card">
                <div className="container-name-price-card">
                <p className="name-card">Fauteuil noir</p>
                <p className="price-card">39,00 €</p>
                </div>
                <p className="description-text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="container-card">
            <div className="img-card"></div>
            <button className="shopping-cart-button"></button>
            <div className="description-card">
                <div className="container-name-price-card">
                <p className="name-card">Fauteuil noir</p>
                <p className="price-card">39,00 €</p>
                </div>
                <p className="description-text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="container-card">
            <div className="img-card"></div>
            <button className="shopping-cart-button"></button>
            <div className="description-card">
                <div className="container-name-price-card">
                <p className="name-card">Fauteuil noir</p>
                <p className="price-card">39,00 €</p>
                </div>
                <p className="description-text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className="container-card">
            <div className="img-card"></div>
            <button className="shopping-cart-button"></button>
            <div className="description-card">
                <div className="container-name-price-card">
                <p className="name-card">Fauteuil noir</p>
                <p className="price-card">39,00 €</p>
                </div>
                <p className="description-text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        </div>   
    )
}
export default Card