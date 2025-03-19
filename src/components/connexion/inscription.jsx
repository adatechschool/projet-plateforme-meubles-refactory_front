import ConnexionTitle from "./ConnexionTitle";
import ConnexionInput from "./ConnexionInput";
import BackgroundConnexion from "./BackgroundConnexion";
import ButtonConnexion from "./ButtonConnexion";
import Footer from "../accueil/Footer"; 

import '../../styles/inscription.css'
import ButtonInscription from "./ButtonInscription";
import Banner from "../Banner";


function Inscription() {
    return (
      <div>
        <Banner/>
        <div className="container-general">
        <BackgroundConnexion />
          <div className="right-container">
        <ConnexionTitle />

        <ButtonInscription />
        </div>
        </div>
        <Footer />
      </div>
    );
}

export default Inscription;