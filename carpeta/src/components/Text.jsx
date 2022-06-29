import React from 'react';
import './styles/text.css';

const Text = ({texto}) => {
  return (
    <p className='text'>
        {texto}
    </p>
  )
}

export default Text