// Import de composants 
import Counter from "./Counter"
import List from './List'
import Home from './Home'
import Random from './Random'
import Form from './Form'
import Shop from './Shop'
import Product from './Product'

// Imports liés à MUI 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';


import cartLogo from "./assets/cart.svg"

import { useContext } from "react"
import { ShopContext } from "./context/ShopContext"

// React router imports (elements du menu de navigation)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// TO DO : 

// Protéger les routes : créer un component qui viendra vérifier la validité du access JWT token en entourant les routes concernées

// Utiliser les omponents MUI (ou mieux)pour la Navbar 

// Page produit : proposer un "rating" + commentaires pour chaque produit

// Faire en sorte que lors de l'arrivée sur le site on vérifie la présence du token 
// -> Si pas de token on affiche pas les liens du menu et on ne peut que voir la page de form 
// -> Si token on renvoie vers le shop ou page d'accueil 


function App() {
  let { cart } = useContext(ShopContext)

  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        {/* Navigation */}

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              </IconButton>

              <Link to="/"><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 1.5 }}>Home</Typography></Link> 
              <Link to="/counter"><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 1.5 }}>Counter</Typography></Link> 
              <Link to="/random"><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 1.5 }}>Random</Typography></Link> 
              <Link to="/form"><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 1.5 }}>Form</Typography></Link> 
              <Link to="/list"><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 1.5 }}>List</Typography></Link> 
              <Link to="/shop"><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 1.5 }}>Shop</Typography></Link>
              <img src={cartLogo} style={{ width: "30px", marginLeft: "1rem" }} />
              <p>{cart ? cart.length : 0}</p>

            </Toolbar>
          </AppBar>
        </Box>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/list" element={<List />} />
          <Route path="/random" element={<Random />} />
          <Route path="/form" element={<Form />} />
          <Route path="/shop" element={<Shop />} />

          {/* Route dynamique pour la page individuelle d'un produit */}
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
