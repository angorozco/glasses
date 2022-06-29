import React from 'react';

const Counter2 = ({funcion}) => {

    const numero = 3;

  return (
    <button onClick={() => funcion(numero)}>Counter2</button>
  )
}

export default Counter2