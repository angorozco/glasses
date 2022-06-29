import React from 'react';
import Text from './Text';
import Counter from './Counter';
import Counter2 from './Counter2';

const ItemContainer = () => {

    const persona = {nombre: "Angelica", edad: 30};
    
    const onAdd = (quantity) => {
        console.log(`el valor obtenido es ${quantity}`);
    }
   
  return (
    <>
        <div>ItemContainer</div>
        <Text texto={persona.nombre}/>
        <Text texto={persona.edad}/>
        <Counter texto={persona.nombre}/>
        <Counter2 funcion={onAdd}/>
    </>
  )
}

export default ItemContainer