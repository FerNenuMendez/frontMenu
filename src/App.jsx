import Index from './pages/index/Index.jsx'
import Menu from './pages/menu/Menu.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx' 
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
            <Route path='menu/categoria/:categoria' element={<ItemListContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
