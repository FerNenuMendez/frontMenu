import Index from './pages/index/Index.jsx'
import MenuBebidas from './pages/menuBebidas/MenuBebidas.jsx'
import MenuPizzas from './pages/menuPizzas/MenuPizzas.jsx'
import MenuPostres from './pages/menuPostres/MenuPostres.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/menubebidas' element={<MenuBebidas/>}/>
          <Route path='/menupizzas' element={<MenuPizzas/>}/>
          <Route path='/menupostres' element={<MenuPostres/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
