const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />
  },
  {
    path: '/card',
    element: <Card />
  },
  {
    path: '/furniturefilter',
    element: <FurnitureFilter />
  },
  {
    path: '/footer',
    element: <Footer />
  },
  {
    path: '/detailcommand',
    element: <DetailCommand />
  }
])

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Accueil from './components/accueil/Accueil'
import Card from './components/accueil/Card';
import Footer from './components/accueil/Footer'
import FurnitureFilter from './components/accueil/FurnitureFilter'
import DetailCommand from './components/DetailCommand'

import './styles/Card.css'
import './styles/Footer.css'
import './styles/App.css'
import './styles/FurnitureFilter.css'
import './styles/DetailCommand.css'

function App() {
  return <RouterProvider router={router} />
}

export default App
