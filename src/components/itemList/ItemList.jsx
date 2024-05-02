/* eslint-disable react/prop-types */
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import BtnAddPedido from '../btnAddPedido/BtnAddPedido.jsx'
import CardComponent from '../cardComponent/CardComponent.jsx'
import './ItemList.css'

// eslint-disable-next-line react/prop-types
const ItemList = ({items}) => {
  
  return (
    <div className='itemList'>
      <Header/> 
      <div>
        {/* BTN VOLVER */}
        <BtnAddPedido/>
      </div>
      <h2>Estas son nuestras opciones en {items[0].categoria}</h2>
      <CardComponent  items={items}/> 
      {/* <Footer/> */}
    </div>
  )
}

export default ItemList