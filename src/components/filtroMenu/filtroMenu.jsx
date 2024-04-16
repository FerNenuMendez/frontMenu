import { Link } from "react-router-dom"
import './filtroMenu.css'

const filtroMenu = () => {
  return (
    <div className='seleccion'>
        <Link to="/menubebidas" className='seleccion_link'><button className='seleccion_btn'>Bebidas</button></Link>
        <Link to="/menupizzas" className='seleccion_link'><button className='seleccion_btn'>Pizzas</button></Link>
        <Link to="/menupostres" className='seleccion_link'><button className='seleccion_btn'>Postres</button></Link>
    </div>
  )
}

export default filtroMenu