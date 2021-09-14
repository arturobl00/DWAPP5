import React, {Fragment} from 'react';

const Comentario = ({datos1}) => {
    return ( 
        <Fragment>
            <div className="media">
                <div className="media-body">
                    <h2>Ejemplo Comentarios</h2>
                    <h5 className="mt-0">Media heading {datos1.nombre}</h5>
                    <img src={datos1.urlImagen} alt="" className="mr-3"/>
                    <p>{datos1.texto}</p>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Comentario;
