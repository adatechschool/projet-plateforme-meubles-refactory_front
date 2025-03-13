import FurnitureFilter from '../components/accueil/FurnitureFilter.jsx'
import Card from '../components/accueil/Card.jsx';
import Footer from '../components/general/Footer.jsx'

function Accueil() {
    return (
      <div>
        <FurnitureFilter />
        <Card />
        <Footer />
      </div>
    );
}

export default Accueil;