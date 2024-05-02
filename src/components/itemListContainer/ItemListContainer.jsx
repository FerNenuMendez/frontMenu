import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../itemList/ItemList.jsx'

const ItemListContainer = () => {
    const [items , setItems] = useState();
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
              const db = data.payload;
              setItems(db);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData(); 
    }, [url]);

    // Renderizar ItemList solo cuando los items se han cargado correctamente
    return (
        <div>
            {items && <ItemList items={items}/>}
        </div>
    );
}

export default ItemListContainer;
