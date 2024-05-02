/* eslint-disable no-unused-vars */
import BtnATC from '../../components/botonAddToCart/BtnATC.jsx'
import {useEffect, useState} from 'react'
import './CardComponent.css'



const CardComponent = (items) => {

  const [count, setCount] = useState(1)

  return (
    <div>
      <div className='cardContainer'>
        {items.items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.nombre} className='card__img' />
            <p className='card__nombre_b'>{item.nombre}</p>
            <p className='card__detalle_b'>{item.detalle}</p>
            <p className='card__precio_b'>${item.precio}</p>
            <BtnATC count={count} setCount={setCount}/>
          </div>
        ))}  
      </div>
    </div>
    
  )
}

export default CardComponent