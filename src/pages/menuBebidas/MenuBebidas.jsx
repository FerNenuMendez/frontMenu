import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import BtnVolver from '../../components/btnVolver/btnVolver.jsx'
import PedidoCounter from '../../components/pedidoCounter/PedidoCounter.jsx'
import BtnATC from '../../components/botonAddToCart/BtnATC.jsx'
import img from '/bebida.jpg'
import { useEffect, useState} from 'react';
import './MenuBebidas.css';

const MenuBebidas = () => {
  const [bebidas, setBebidas] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [pedido, setPedido] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [botoneraFinal, setBotoneraFinal] = useState(false)

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


  return (
    <>
      <Header/>
      <div className='navegacion'>
        <BtnVolver />
        <PedidoCounter/>
      </div>
      <section className='menu'>
        <h2 className='menu__h2'>bebidas</h2>
        <div className='cardContainer'>
          {bebidas.map((bebida, index) => (
            <div key={index} className="card">
              <img src={img} alt={bebida.nombre} className='card__img' />
              <p className='card__nombre_b'>{bebida.nombre}</p>
              <p className='card__detalle_b'>{bebida.detalle}</p>
              <p className='card__precio_b'>${bebida.precio}</p>
              <BtnATC/>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default MenuBebidas;
