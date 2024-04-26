import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import BtnVolver from '../../components/btnVolver/btnVolver.jsx'
import PedidoCounter from '../../components/pedidoCounter/PedidoCounter.jsx'
import img from '/bebida.jpg'
import { useEffect, useState} from 'react';
import './MenuBebidas.css';

const MenuBebidas = () => {
  const [bebidas, setBebidas] = useState([])
  const [pedido, setPedido] = useState([])
  const url = 'https://api-menu-six.vercel.app/api/bebidas/'; 

  useEffect(() => {
    const fetchBebidas = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const responseData = await response.json();
          if (Array.isArray(responseData.payload)) {
            const bebidasConCantidad = responseData.payload.map(bebida => ({ ...bebida, cantidad: 1 }));
            setBebidas(bebidasConCantidad);
          } else {
            console.error('Los datos obtenidos no contienen un array de bebidas en response');
          }
        } else {
          console.error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error en la solicitud fetch:', error);
      }
    };
    fetchBebidas();
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
    const nuevasBebidas = [...bebidas];
    nuevasBebidas[index].cantidad = nuevaCantidad;
    setBebidas(nuevasBebidas);
  };

  return (
    <>
      <Header/>
      <div className='navegacion'>
        <BtnVolver />
        <PedidoCounter/>
      </div>
      <section className='menu'>
        <h2 className='menu__h2'>Bebidas</h2>
         <div>
          {bebidas.map((bebida, index) => (
             <div key={index} className="card">
               <img src={img} alt={bebida.nombre} className='card__img' />
               <h3 className='card__nombre'>{bebida.nombre}</h3>
               <p className='card__detalle'>{bebida.detalle}</p>
               <p className='card__precio'>${bebida.precio}</p>

               <div className="agregar__pedido">
                 <button className="cantidad__btn" onClick={() => actualizarCantidad(index, bebida.cantidad + 1)}>+</button>
                 <input 
                   type="number" 
                   className="cantidad__input"
                   value={bebida.cantidad} 
                   min={1} 
                   onChange={(e) => actualizarCantidad(index, parseInt(e.target.value, 10))} 
                 />
                 <button className="cantidad__btn" onClick={() => actualizarCantidad(index, Math.max(bebida.cantidad - 1, 1))}>-</button>
               </div>

               <button className="cantidad__btn" onClick={() => agregarAlPedido(bebida.nombre, bebida.precio, bebida.cantidad)}>Agregar al Pedido</button>
             </div>
          ))}
        </div> 
      </section>
      <Footer/>
    </>
  );
};

export default MenuBebidas;
