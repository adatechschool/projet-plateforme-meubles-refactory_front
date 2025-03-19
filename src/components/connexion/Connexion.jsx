import ConnexionTitle from "./ConnexionTitle";
import ConnexionInput from "./ConnexionInput";
import BackgroundConnexion from "./BackgroundConnexion";
import ButtonConnexion from "./ButtonConnexion";
import Footer from "../accueil/Footer";
import Banner from "../Banner" 

import '../../styles/Connexion.css'


function Connexion() {
    return (
      <div>
        <Banner />
        <div className="container-general">
        <BackgroundConnexion />
          <div className="right-container">
        <ConnexionTitle />
        
        <ButtonConnexion />
        </div>
        </div>
        <Footer />
      </div>
    );
}

export default Connexion;