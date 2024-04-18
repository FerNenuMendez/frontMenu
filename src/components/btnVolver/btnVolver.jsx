import { Link } from "react-router-dom"
import { TiArrowLeftThick } from "react-icons/ti";
import './btnVolver.css'


const btnVolver = () => {
  return (
    <Link to={'/menu'} ><button className='volver'><TiArrowLeftThick /></button></Link>
  )
}

export default btnVolver