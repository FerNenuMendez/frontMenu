import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import BtnVolver from '../../components/btnVolver/btnVolver.jsx'
import img from '/plato.jpg'
import { useState, useEffect } from 'react';
import './MenuPizzas.css'

const MenuPizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [pedido, setPedido] = useState([]);
  const url = 'https://api-menu-six.vercel.app/api/productos/'; 

  useEffect(() => {
    const fetchpizzas = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const responseData = await response.json();
          if (Array.isArray(responseData.payload)) { // Verifica si responseData.payload es un array
            const pizzasConCantidad = responseData.payload.map(pizza=> ({ ...pizza, cantidad: 1 }));
            setPizzas(pizzasConCantidad); // Actualiza el estado con los datos recibidos y la cantidad inicial
          } else {
            console.error('Los datos obtenidos no contienen un array de pizzas en response.payload');
          }
        } else {
          console.error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error en la solicitud fetch:', error);
      }
    };

    fetchpizzas();
  }, [url]);

  const agregarAlPedido = (nombre, precio, cantidad) => {
    const nuevoPedido = {
      nombre,
      precio,
      cantidad,
    };
    setPedido([...pedido, nuevoPedido]);
  };

  const actualizarCantidad = (index, nuevaCantidad) => {
    const nuevaspizzas = [...pizzas];
    nuevaspizzas[index].cantidad = nuevaCantidad;
    setPizzas(nuevaspizzas);
  };

  return (
    <>
      <Header/>
      <div className='navegacion'>
        <BtnVolver/>
      </div>
      <section className='menu'>
        <h2 className='menu__h2'>Pizzas</h2>
        <div>
          {pizzas.map((pizza, index) => (
            <div key={index} className="card">
              <img src={img} alt={pizza.nombre} className='card__img' />
              <h3 className='card__nombre'>{pizza.nombre}</h3>
              <p className='card__detalle'>{pizza.detalle}</p>
              <p className='card__precio'>${pizza.precio}</p>

              <div className="agregar__pedido">
                <button className="cantidad__btn" onClick={() => actualizarCantidad(index, pizza.cantidad + 1)}>+</button>
                <input 
                  type="number" 
                  className="cantidad__input"
                  value={pizza.cantidad} 
                  min={1} 
                  onChange={(e) => actualizarCantidad(index, parseInt(e.target.value, 10))} 
                />
                <button className="cantidad__btn" onClick={() => actualizarCantidad(index, Math.max(pizza.cantidad - 1, 1))}>-</button>
              </div>

              <button className="cantidad__btn" onClick={() => agregarAlPedido(pizza.nombre, pizza.precio, pizza.cantidad)}>Agregar al Pedido</button>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default MenuPizzas