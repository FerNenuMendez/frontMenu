/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import BtnATC from '../botonAddToCart/BtnATC.jsx'
import BtnVolver from '../btnVolver/btnVolver.jsx'
import PedidoCount from '../pedidoCounter/pedidoCounter.jsx'
import { cartContext } from '../../context/cartProvider.jsx'
import { useState, useContext, useEffect } from 'react'
import './ItemDetail.css'


const ItemDetail = ({categoria, id}) => {
  const {addToCart}=useContext(cartContext)
  const [count, setCount]= useState(1)
  const [item, setItem] = useState([])
  const url = `https://api-menu-six.vercel.app/api/categoria/${categoria}/id/${id}`

  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const db = data.payload;
            console.log(db)
            setItem(db);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData(); 
  }, [url]);

  return (
    <>
      <div className='item__botonera'>
        <BtnVolver/>
        <PedidoCount/>
      </div>
      <div className='item__container'>
        <h2 className='item__h2'>{item.nombre}</h2>
        <img src={item.img} alt={item.nombre} className='item__img' />
        <h3 className='item__detalle'>{item.detalle}</h3>
        <h3 className='item__precio'>${item.precio}</h3>
        <BtnATC count={count} setCount={setCount} addToCart={addToCart} item={item}/>
      </div>
    </>
  )
}

export default ItemDetail