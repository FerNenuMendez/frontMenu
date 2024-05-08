/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext([])

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => { 
    //Pedido
    const [cart, setCart] = useState([])
   
    //info Mesa
    const [name, setName] = useState('')
    const [mesa, setMesa] = useState(0)
    
    //mostrar Menu
    const [menu, setMenu] = useState(false)
    
    //pedido de bebidas
    const [bedidasPedidas, setBebidasPedidas] = useState([])
    
    //pedido de comidas
    const [comidasPedidas, setComidasPedidas] = useState([])
    
    //pedido de postres
    const [postresPedidos, setPostresPedidos] = useState([])

    const infoMesa=(name, mesa)=>{
        setName(name)
        setMesa(mesa)
        setMenu(true)
        console.log(name,mesa)
    }

    const addToCart = (product, quantity)=>{
        setCart([ ...cart,{product, quantity} ])
    }

    const cleanCart = () => {
        setCart([])
    }

    

    return (
        <cartContext.Provider value={{ cart, name, mesa, menu, bedidasPedidas, comidasPedidas, postresPedidos, setName, setMesa, setMenu, cleanCart, infoMesa, setBebidasPedidas, setComidasPedidas, setPostresPedidos, addToCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
