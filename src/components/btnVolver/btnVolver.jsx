import { Link } from "react-router-dom"
import { TiArrowLeftThick } from "react-icons/ti";
import './btnVolver.css'


// eslint-disable-next-line no-unused-vars
const btnVolver = ({param}) => {
  return (
    <Link to={'/menu'} ><button className='volver'><TiArrowLeftThick /></button></Link>
  )
}

export default btnVolver