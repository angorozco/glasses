import React from 'react';
import {useState} from 'react';
import './itemcount.css';

const ItemCount = ({stock, initial , onAdd}) => {
  const [count, setCount] = useState(initial);

  const sumarBoton = () => {
    setCount(count + 1);
  }

  const restarBoton = () => {
    setCount(count - 1);
  }

  return (
    <>
      <button className="buttonCount" onClick={restarBoton} disabled={count <= initial}> - </button>
      <span className='countStyle'>{count}</span>
      <button className="buttonCount" onClick={sumarBoton} disabled={count >= stock}> + </button>
      <div><button className='buttonAdd' onClick={() => onAdd(count)} disabled={stock == 0}>Agregar al Carrito</button></div>
    </>
  )
}

export default ItemCount