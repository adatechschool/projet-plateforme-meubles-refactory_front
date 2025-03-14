import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Panier from "./components/Panier";

import './styles/Footer.css'
import './styles/FurnitureFilter.css'
import './styles/DetailCommand.css'
import './styles/Background.css'
import Product from "./components/Product.jsx";

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
    path: '/Product',
    element : <Product/>
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
