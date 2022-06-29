import React from 'react';
import './styles/button.css';

const Button1 = ({text, style, funcion}) => {
  return (
    <button className={style} onClick={() => 
    funcion()}>
        {text}
    </button>
    
  )
}

export default Button1