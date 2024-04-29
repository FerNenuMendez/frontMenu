import {useContext, useState} from 'react'
import {cartContext} from '../../context/cartProvider.jsx'
import { Link } from "react-router-dom"
import { TiShoppingCart} from "react-icons/ti";
import './PedidoCounter.css'

const PedidoCounter = () => {
  const {cart} = useContext(cartContext)
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(false)
  
  
  return (
    visible ? (
      <Link to="" className="link"><button className='volver2'><TiShoppingCart /><p className='volver__p'>{cart.length}</p></button></Link>
    ):(
    <div>
      <Link to="" className="link"><button className='volver2'><TiShoppingCart /></button></Link>
    </div>    
    )
  )
}

export default PedidoCounter