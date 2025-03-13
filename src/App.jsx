import {FaChevronUp} from "react-icons/fa";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil/>
  },
  {
    path: '/',
    element: <Product/>
  }])

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/Card.css'
import './styles/Footer.css'
import './styles/App.css'
import './styles/FurnitureFilter.css'
import './styles/DetailCommand.css'
import Accueil from './pages/Accueil.jsx'
import Product from "./pages/Product.jsx";

function App() {
  return <RouterProvider router={router} />
}

export default App
