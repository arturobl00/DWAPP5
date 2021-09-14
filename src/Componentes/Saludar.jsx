import React, {Fragment} from 'react';

const Saludar = (props) => {
    console.log(props)

    return ( 
        <Fragment>
            <h1>Componente Saludar: Hola saludos!</h1>
            <p>Elementos del props Nombre: {props.nombre}, Apellidos: {props.apellido} y Edad: {props.edad}</p>
        </Fragment>
     );
}
 
export default Saludar;