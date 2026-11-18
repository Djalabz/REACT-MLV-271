import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import { ShopContextProvider } from './context/ShopContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider><ShopContextProvider><App /></ShopContextProvider></AuthContextProvider>
)
