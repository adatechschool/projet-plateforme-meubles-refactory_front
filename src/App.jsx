
import Acceuil from "./components/acceuil/Acceuil";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Acceuil />
  }
])

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/Footer.css'
import './styles/Banner.css'
import './styles/FurnitureFilter.css'
import './styles/DetailCommand.css'
import './styles/Background.css'
import Accueil from "./components/accueil/Accueil.jsx";

function App() {
  return <RouterProvider router={router} />
}

export default App
