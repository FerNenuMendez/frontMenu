/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './CardComponent.css';

const CardComponent = ({ items }) => {

  return (
    <div>
      <div className='cardContainer'>
        {items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.nombre} className='card__img' />
            <p className='card__nombre_b'>{item.nombre}</p>
            {/* <p className='card__precio_b'>${item.precio}</p> */}
          </div>
        ))}  
      </div>
    </div>
  );
};

export default CardComponent;
