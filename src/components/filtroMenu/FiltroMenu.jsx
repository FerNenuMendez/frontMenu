import { Link } from "react-router-dom"
import './filtroMenu.css'

const filtroMenu = () => {
  return (
    <div className='seleccion'>
        <Link to={"categoria/bebidas"} className='seleccion_link'><button className='seleccion_btn'>Bebidas</button></Link>
        <Link to={"categoria/productos"} className='seleccion_link'><button className='seleccion_btn'>Pizzas</button></Link>
        <Link to={"categoria/postres"} className='seleccion_link'><button className='seleccion_btn'>Postres</button></Link>
    </div>
  )
}

export default filtroMenu
