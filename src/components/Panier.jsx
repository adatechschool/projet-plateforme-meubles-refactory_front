import Banner from './Banner'
import CartItem from './CartItem'
import DetailCommand from './DetailCommand'
import Footer from './accueil/Footer'
import '../styles/Panier.css'

function Panier() {
  return (
    <div>
      <Banner />
      <div className='container-cart'>
      <CartItem />
      <DetailCommand />
      </div>
      <Footer />

    </div>
  )
}

export default Panier;
