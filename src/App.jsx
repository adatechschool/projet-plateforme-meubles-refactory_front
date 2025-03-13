import Product from "./components/product/Product.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Product />
  }
])

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/Footer.css'
import './styles/Banner.css'
import './styles/FurnitureFilter.css'
import './styles/DetailCommand.css'
import './styles/Background.css'

function App() {
  return <RouterProvider router={router} />
}

export default App
