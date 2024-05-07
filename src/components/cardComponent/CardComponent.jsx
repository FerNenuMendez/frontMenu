/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './CardComponent.css';
import { Link } from 'react-router-dom';

const CardComponent = ({ items }) => {

  return (
    <div>
      <div className='cardContainer'>
        {items.map((item, index) => (
          <div key={index} className="card">
            <Link to={`detalle/${item.id}`}>
              <img src={item.img} alt={item.nombre} className='card__img' />
            </Link>
            <p className='card__nombre'>{item.nombre}</p>
            {/* <p className='card__precio_b'>${item.precio}</p> */}
          </div>
        ))}  
      </div>
    </div>
  );
};

export default CardComponent;
