import React from 'react';
import './styles/title.css';

const Title = ({nombre}) => {
  return (
    <h1 className='title-styles'>Hola, <span>{nombre}</span>. Bienvenido!</h1>
  )
}

export default Title