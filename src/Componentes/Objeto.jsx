import React, {Fragment} from 'react';

const Miobjeto = ({datos}) => {
    return ( 
        <Fragment>
            <h1>Datos de mi objeto</h1>
            <p>Nombre: {datos.nombre}</p>
            <p>Apellidos: {datos.apellidos}</p>
            <p>Carrera: {datos.carrera}</p>
        </Fragment>
     );
}
 
export default Miobjeto;