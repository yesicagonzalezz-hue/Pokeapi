import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';
import Inicio from './componentes/inicio'
import Coleccion from './componentes/coleccion'
import Favoritos from './componentes/favoritos'
import Informativa from './componentes/informativa'
import Usuario from './componentes/usuario'
import Pokemon from './componentes/pokemon'
import './App.css'

function App() {

  return (
   <>

      <Router>
      <nav className='c-menu'>
        <Link to="/">Inicio</Link>
        <Link to="/coleccion">Coleccion</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/informativa">Informativa</Link>
        <Link to="/usuario">Usuario</Link>
        <Link to="/pokemon">Pokemon</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/coleccion" element={<Coleccion />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Router>
    </>
  )
}

export default App