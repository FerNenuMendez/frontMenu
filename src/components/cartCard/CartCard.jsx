/* eslint-disable no-unused-vars */
import './CartCard.css'
import { useContext } from "react"
import { cartContext } from '../../context/cartProvider.jsx'

const CartCard = () => {

    const {cart}=useContext(cartContext)

    const pedido=cart.map((item)=>{
        const producto=item.product
        const cantidad=item.quantity
        const precio = producto.precio*cantidad
    return(
        <section className='section__cart' key={producto.id} id={producto.id}>
            <div className="cart">
                <div className="itemCart__container">
                    <img src={producto.img} alt="producto imagen" className="cartCard__img"/>
                    <h2 className="item__container__h2">{producto.nombre}</h2>
                    <h3 className="item__container__h3">Precio unitario : ${producto.precio}</h3>
                    <h3 className="item__container__h3">{cantidad} u.</h3>
                    <h3 className="item__container__h3">Total : ${precio}</h3>
                </div>
            </div> 
        </section>
        )
    })

  return (
    pedido
  )
}

export default CartCard 