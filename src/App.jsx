// Import de composants 
import Counter from "./Counter"
import List from './List'
import Home from './Home'
import Random from './Random'


// React router imports (elements du menu de navigation)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Composant fonctionnel 
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/random">Random</Link> |{" "}
          <Link to="/list">List</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/list" element={<List />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
