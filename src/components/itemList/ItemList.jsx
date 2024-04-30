import CardComponent from '../cardComponent/CardComponent.jsx'
import './ItemList.css'

// eslint-disable-next-line react/prop-types
const ItemList = ({items}) => {
  return (
    <div className='itemList'>
      <CardComponent items={items}/> 
    </div>
  )
}

export default ItemList