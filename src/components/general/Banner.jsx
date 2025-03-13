import '../styles/Banner.css'
import userConnextion from '../assets/icons/user.png'
import panier from '../assets/icons/shopping-cart.png'
import recherche from '../assets/icons/loupe.png'

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
                <li><a href="#">ACCUEIL</a></li>
                <li><a href="#">TENDANCES</a></li>
                <li><a href="#">COLLECTION</a></li>
                <li><a href="#">QUI SOMMES-NOUS?</a></li>
            </ul>
            </nav>
        </div>

        <div className="ButtonsLink" class="buttons">
            <a className='buttonRecherche' href="#"><img src={recherche} alt="" /></a>
            <a className='buttonPanier' href="#"><img src={panier} alt="" /></a>
            <a className='buttonConnexion' href="#"><img src={userConnextion} alt="" /></a>
        </div>
    </div>

    </header>
  );
}
export default Banner;