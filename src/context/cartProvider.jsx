import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext([])

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => { // Desestructura props para obtener children
    const [cart, setCart] = useState([])

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
        <cartContext.Provider value={{ cart, addToCart, cleanCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
