import { Link } from "react-router-dom"
import './btnVolver.css'


const btnVolver = (param) => {
  return (
    <Link to={param} ><button className='volver'>Volver</button></Link>
  )
}

export default btnVolver