import React from 'react';
import './styles/background.css';

const Background = ({children, bg}) => {
  return (
    <div className={bg}>
        {children}
    </div>
  )
}

export default Background