import React from 'react';
import './styles/button.css';

const Button = ({color, text}) => {
  return (
    <button className={color}>
        {text}
    </button>
  )
}

export default Button