import Banner from './Banner'
import CartItem from './CartItem'
import DetailCommand from './DetailCommand'
import '../styles/Panier.css'

function Panier() {
  return (
    <div>
      <Banner />
      <div className='container-cart'>
      <CartItem />
      <DetailCommand />
      </div>
    </div>
  )
}

export default Panier