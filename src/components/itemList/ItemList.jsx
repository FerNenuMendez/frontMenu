/* eslint-disable react/prop-types */
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import PedidoCount from '../pedidoCounter/pedidoCounter.jsx'
import CardComponent from '../cardComponent/CardComponent.jsx'
import BtnVolver from '../btnVolver/btnVolver.jsx'
import './ItemList.css'

// eslint-disable-next-line react/prop-types
const ItemList = ({items}) => {
  
  return (
    <div className='itemList'>
      <Header/> 
      <div className='itemList__botonera'>
        <BtnVolver/>
        <PedidoCount/>
      </div>
      <h2>Estas son nuestras opciones en {items[0].categoria}</h2>
      <CardComponent  items={items}/> 
      <Footer/>
    </div>
  )
}

export default ItemList