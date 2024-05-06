/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import BtnATC from '../botonAddToCart/BtnATC.jsx';
import { cartContext } from '../../context/cartProvider.jsx';
import { useState, useContext} from 'react';
import './ItemDetail.css'

const ItemDetail = () => {
    const [count, setCount] = useState(1);
    const { bebidasPedidas, comidasPedidas, setBebidasPedidas, setComidasPedidas } = useContext(cartContext);
    const agregarAlPedido =(item, precio, cantidad)=>{
        if (items.categoria === "bebidas"){
          setBebidasPedidas([...bebidasPedidas, {item, precio, cantidad}])
          console.log(bebidasPedidas)
        } else {
          setComidasPedidas([... comidasPedidas, {item, precio, cantidad}])
          console.log(comidasPedidas)
        }
      }




  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail