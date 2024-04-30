/* eslint-disable no-unused-vars */
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../itemList/ItemList.jsx'

const ItemListContainer = () => {
    const [items , setItems] = useState();
    const [db, setDb] = useState();
    const {categoria} = useParams();
    const url = `https://api-menu-six.vercel.app/api/categoria/${categoria}/`

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              const db = data.payload
              setItems(db)
              ; // Establecer los datos obtenidos en el estado
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData(); // Llamar a la función de búsqueda de datos cuando el componente se monta
    }, [url]);

    useEffect(()=>{
      setDb(items)
    }, [items])

    
  return (
    <div>
      <ItemList items={db}/>
    </div>
  )
}

export default ItemListContainer