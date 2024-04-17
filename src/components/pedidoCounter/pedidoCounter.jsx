import { Link } from "react-router-dom"
import { TiShoppingCart} from "react-icons/ti";
import './pedidoCounter.css'

const pedidoCounter = () => {
  return (
    <div>
      <Link to="" className="link"><button className='volver2'><TiShoppingCart /><p className='volver__p'>1</p></button></Link>
    </div>
  )
}

export default pedidoCounter