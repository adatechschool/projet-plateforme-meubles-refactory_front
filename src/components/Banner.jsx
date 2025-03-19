import '../styles/Banner.css'
import userConnextion from '../assets/icons/user.png'
import panier from '../assets/icons/shopping-cart.png'
import recherche from '../assets/icons/loupe.png'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <header className="logoNav">
    <div className="navBar">
        <div className="logo">
            <a href="#"> Möbel </a>
        </div>

        <div className="nav">
            <nav>
            <ul className='navList'>
                <li><Link to="/">ACCUEIL</Link></li>
                <li><a href="#">TENDANCES</a></li>
                <li><a href="#">COLLECTION</a></li>
                <li><a href="#">QUI SOMMES-NOUS?</a></li>
            </ul>
            </nav>
        </div>

        <div className="ButtonsLink">
            <a className='buttonRecherche' href="#"><img src={recherche} alt="" /></a>
            <Link className="buttonPanier" to="/panier"><img src={panier} alt="Panier" /></Link>
            <Link className='buttonConnexion' to="/connexion"><img src={userConnextion} alt="" /></Link>
        </div>
    </div>

    </header>
  );
}
export default Banner;