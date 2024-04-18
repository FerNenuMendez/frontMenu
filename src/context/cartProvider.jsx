/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext([])

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => { // Desestructura props para obtener children
    //Pedido
    const [cart, setCart] = useState([])
    //info Mesa
    const [name, setName] = useState('')
    const [mesa, setMesa] = useState(0)
    //mostrar Menu
    const [menu, setMenu] = useState(false)
    //pedido de bebidas
    const [bedidas, setBebidas] = useState([])
    //pedido de comidas
    const [comidas, setComidas] = useState([])
    //pedido de postres
    const [postres, setPostres] = useState([])

    const infoMesa=(name, mesa)=>{
        setName(name)
        setMesa(mesa)
        setMenu(true)
        console.log(name,mesa)
    }

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (product, quantity) => {
        setCart([...cart, { product, quantity }])
        // swal({
        //     title: "El producto se agrego al carrito",
        //     icon: "success",
        //     button: "Ok",
        //     })
    }

    return (
        <cartContext.Provider value={{ cart, name, mesa, menu, bedidas, comidas, postres, setName, setMesa, setMenu, addToCart, cleanCart, infoMesa, setBebidas, setComidas, setPostres }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
