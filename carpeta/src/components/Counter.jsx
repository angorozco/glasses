import React from 'react';

const Counter = ({texto}) => {
  return (
    <button onClick={() => console.log(texto)}>
        clickea
    </button>
  )
}

export default Counter