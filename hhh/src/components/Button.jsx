import React from 'react';
import './styles/button.css';

const Button = ({style, data, text}) => {
  return (
    <button className={style} onClick={() => console.log(data)}>
        {text}
    </button>
  )
}

export default Button