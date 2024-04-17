import { Link } from "react-router-dom"
import { TiArrowLeftThick } from "react-icons/ti";
import './btnVolver.css'


const btnVolver = (param) => {
  return (
    <Link to={param} ><button className='volver'><TiArrowLeftThick /></button></Link>
  )
}

export default btnVolver