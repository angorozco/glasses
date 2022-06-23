import React from 'react';
import ItemCount from '../ItemCount';

const ItemListContainer = () => {

  const onAdd = (quantity) => {
    console.log(`se agregaron ${quantity} elementos`);
  }
 
  return (
    <>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer