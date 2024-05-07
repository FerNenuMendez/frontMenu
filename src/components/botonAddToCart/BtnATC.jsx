/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './BtnATC.css'

const BtnATC = ({count, setCount, addToCart, item}) => {

  const [mostrarMenu, setMostrarMenu] = useState(false); 
  
  const restarCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count === 1) { 
      setMostrarMenu(false); 
    }
  };

  const sumarCount = () => {
    setCount(count + 1);
    if(count>0){
      //boton finalizar pedido true
    }
  };

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div className="boton-suma-resta">
      {
        mostrarMenu ? (
          <div className="boton-suma-resta__container">
            <div className="boton-suma-resta__menu">
              <button className="boton-suma-resta__menu-btn" onClick={restarCount}>
                -
              </button>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
                min={1}
                className="boton-suma-resta__menu-input"
              />
              <button className="boton-suma-resta__menu-btn" onClick={sumarCount}>
                +
              </button>
            </div>
            <div>
              <button className="boton-suma-resta__menu-btn" onClick={()=>addToCart(item, count)}>
                Agregar al Pedido
              </button>
            </div>
          </div>
        ):(
          <button className="boton-suma-resta__boton" onClick={toggleMenu}>
          +
          </button>
        )}
    </div>
  )
}

export default BtnATC