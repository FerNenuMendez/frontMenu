import {useContext} from 'react'
import {cartContext} from '../../context/cartProvider.jsx'
import { Link } from "react-router-dom"
import { TiShoppingCart} from "react-icons/ti";
import './PedidoCounter.css'

const PedidoCounter = () => {
  const {cart} = useContext(cartContext) 
  return (
    <div>
      <Link to="" className="link"><button className='volver2'><TiShoppingCart /><p className='volver__p'>{cart.length}</p></button></Link>
    </div>
  )
}

export default PedidoCounter