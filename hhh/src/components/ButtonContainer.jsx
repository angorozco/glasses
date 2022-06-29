import React from 'react';
import Button from './Button';
import Button1 from './Button1';

const ButtonContainer = () => {
    const persona = {nombre: "Angelica", edad: 30};

    const efecto = () =>{
        console.log(`su nombre es ${persona.nombre} y tiene ${persona.edad} años`);
    }
 
   
  return (
    <>
        <div><Button style="style1" data={persona.nombre} text="Click me!"/></div>
        <div><Button1 style="style2" text="Presiona" funcion={efecto}/></div>
    </>
  )
}

export default ButtonContainer