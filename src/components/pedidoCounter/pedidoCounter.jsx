import {useContext, useState, useEffect} from 'react'
import {cartContext} from '../../context/cartProvider.jsx'
import { Link } from "react-router-dom"
import { TiShoppingCart} from "react-icons/ti";
import "./pedidoCounter.css"

const PedidoCounter = () => {
  const {cart} = useContext(cartContext)
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(true)
  
  useEffect(()=>{
    try{
      if(cart.length===0){
        setVisible(false)
      }else{
        setVisible(true)
      }
    } catch (error) {
      console.error('Error data:', error);
    }
  }, [cart])
  
  return (
    visible ? (
      <Link to="/cart" className="link"><button className='volver2'><TiShoppingCart /><p className='volver__p'>{cart.length}</p></button></Link>
    ):(
    <div>
      <Link to="/cart" className="link"><button className='volver2'><TiShoppingCart /></button></Link>
    </div>    
    )
  )
}

export default PedidoCounter