import { useState } from 'react';
import './BtnATC.css'

const BtnATC = () => {
  const [cantidad, setCantidad] = useState(1); // Estado para almacenar la cantidad
  const [mostrarMenu, setMostrarMenu] = useState(false); // Estado para mostrar/ocultar el menú
  

  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    } else if (cantidad === 1) { // Verificar si la cantidad es 1
      setMostrarMenu(false); // Establecer mostrarMenu en false si la cantidad es 1
    }
  };

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
    if(cantidad>0){
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
          <div className="boton-suma-resta__menu">
            <button className="boton-suma-resta__menu-btn" onClick={restarCantidad}>
              -
            </button>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
              min={1}
              className="boton-suma-resta__menu-input"
            />
            <button className="boton-suma-resta__menu-btn" onClick={sumarCantidad}>
              +
            </button>
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