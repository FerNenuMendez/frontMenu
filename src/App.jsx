import Index from './pages/index/Index.jsx'
import Menu from './pages/menu/Menu.jsx'
import MenuBebidas from './pages/menuBebidas/MenuBebidas.jsx'
import MenuPizzas from './pages/menuPizzas/MenuPizzas.jsx'
import MenuPostres from './pages/menuPostres/MenuPostres.jsx'
import CartProvider from './context/cartProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/menubebidas' element={<MenuBebidas/>}/>
            <Route path='/menupizzas' element={<MenuPizzas/>}/>
            <Route path='/menupostres' element={<MenuPostres/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
