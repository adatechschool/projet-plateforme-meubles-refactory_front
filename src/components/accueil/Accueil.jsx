import Banner from '../Banner';
import Background from '../Background';
import FurnitureFilter from './FurnitureFilter';
import Card from './CardList';
import Footer from './Footer';

function Accueil() {
    return (
      <div>
        <Banner />
        <Background />
        <FurnitureFilter />
        <Card />
        <Footer />
      </div>
    );
}

export default Accueil;