/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

  const { categoria, id } = useParams();


  return (
    <div className='itemDetailContainer'>
      <ItemDetail categoria={categoria} id={id}/>
    </div>
  )
}

export default ItemDetailContainer