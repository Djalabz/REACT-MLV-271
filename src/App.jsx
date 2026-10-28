// Import de composants 
import Counter from "./Counter"
import List from './List'
import Home from './Home'
import Random from './Random'
import Form from './Form'
import Shop from './Shop'

import cartLogo from "./assets/cart.svg"

import { useContext } from "react"
import { ShopContext } from "./context/ShopContext"

// React router imports (elements du menu de navigation)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Composant fonctionnel 
function App() {

  let { cart } = useContext(ShopContext)

  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/random">Random</Link> |{" "}
          <Link to="/form">Form</Link> |{" "}
          <Link to="/list">List</Link>|{" "}
          <Link to="/shop">Shop</Link>
          <img src={cartLogo} style={{ width: "30px", marginLeft: "1rem" }} />
          <p>{cart.length}</p>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/list" element={<List />} />
          <Route path="/random" element={<Random />} />
          <Route path="/form" element={<Form />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
