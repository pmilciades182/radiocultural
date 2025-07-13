import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Donaciones from './pages/Donaciones'
import Contacto from './pages/Contacto'
import Programacion from './pages/Programacion'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/programacion" element={<Programacion />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
