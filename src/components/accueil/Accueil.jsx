import Banner from '../Banner';
import Background from '../Background';
import FurnitureFilter from './FurnitureFilter';
import CardList from './CardList';
import Footer from './Footer';

function Accueil() {
    return (
      <div>
        <Banner />
        <Background />
        <FurnitureFilter />
        <CardList />
        <Footer />
      </div>
    );
}

export default Accueil;