import Banner from './components/Banner.jsx'
import CartItem from './components/CartItem.jsx'
import Background from './components/Background.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const router =  createBrowserRouter([
  {
    path: '/acceuil',
    element:(
      <div>
        
        <Banner/>
        <Background/>
      </div>
    )
  },
  {
    path: '/cartItem',
    element: (<div>
      <Banner/>
      <CartItem/>
    </div>)
  }
])
function App() {

  return (<RouterProvider router={router} />)
}

export default App
