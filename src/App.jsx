

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Accueil from './components/accueil/Accueil'
import Banner from './components/Banner'
import Background from './components/Background'
import FurnitureFilter from './components/accueil/FurnitureFilter'
import Card from './components/accueil/CardList';
import Footer from './components/accueil/Footer'
import DetailCommand from './components/DetailCommand'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Panier from "./components/Panier";


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
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App