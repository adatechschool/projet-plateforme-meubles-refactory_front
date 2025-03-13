import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Panier from "./components/Panier";


import './styles/Card.css'
import './styles/Footer.css'
import './styles/App.css'
import './styles/FurnitureFilter.css'
import './styles/DetailCommand.css'

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
