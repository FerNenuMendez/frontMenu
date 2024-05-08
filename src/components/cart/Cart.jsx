/* eslint-disable no-unused-vars */
import './Cart.css'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import CartCard from '../cartCard/CartCard.jsx'
import { useContext } from "react"
import {cartContext} from '../../context/cartProvider.jsx'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, cleanCart, name, mesa, } = useContext(cartContext)


    const carrito=()=>{
        if (cart.length === 0){
            return(
                <>
                    <Header/>
                    <div className="cartContainer">
                        <h2 className="cart__h2">{name} no tenes ningun pedido agregado al pedido</h2>
                        <Link to={`/menu`}> 
                            <button className="cart__btnHome">Ir al Menu</button>
                        </Link>
                    </div>
                    <Footer/>
                </>
            )
        } else {
            return(
                <>
                    <Header/>
                    <div className='cartCart'>
                        <CartCard/>
                        <button className="cart__btn__clear" onClick={cleanCart}>Cancelar Pedido</button>
                    </div>
                    <Footer/>
                </>
            )
        }
    }

  return (
    carrito()
  )
}

export default Cart