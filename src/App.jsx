import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Panier from "./components/Panier";
import Product from "./components/product/Product";


import './styles/Card.css'
import './styles/Footer.css'
import './styles/Banner.css'
import './styles/FurnitureFilter.css'
import './styles/DetailCommand.css'
import './styles/Background.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil/>
  },
  {
    path: '/panier',
    element: <Panier/>
  },
  {
    path: "/product/:id",
    element: <Product/>
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App