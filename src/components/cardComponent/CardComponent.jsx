import BtnATC from '../../components/botonAddToCart/BtnATC.jsx'
import img from '/bebida.jpg'
import './CardComponent.css'


const cardComponent = (bebidas) => {
  return (
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
  )
}

export default cardComponent