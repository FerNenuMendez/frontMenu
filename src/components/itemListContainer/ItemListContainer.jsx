/* eslint-disable no-unused-vars */
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [items , setItems] = useState([]);
    const {categoria} = useParams();

    const getItems = () =>{
        if (categoria){
            //Hacer el fetch a la categoria --> crear get el la api
        }
    }
  return (
    <div>ItemListContainer</div>
  )
}

export default ItemListContainer