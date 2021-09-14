import Comentario from "./Componentes/Comentario";
import Miobjeto from "./Componentes/Objeto";
import Saludar from "./Componentes/Saludar";

function App() {
  const mDatos = {
    nombre: 'Carlos Aurelio',
    apellidos: 'Castro Roman',
    carrera: 'Sistemas Computacionales'
  }

  const sujeto = {
    nombre: 'Arturo',
    urlImagen: 'https://i.pinimg.com/originals/0b/d4/62/0bd4624903fe13584c172de9b3f5d9ff.jpg',
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa reprehenderit hic doloremque deserunt assumenda, fuga modi illo possimus illum nostrum omnis repellendus neque facere eligendi quaerat debitis quam sint!'
  }


  return (
    <div className="container">
      <Saludar nombre="Eduardo" apellido ="Sifuentes Morales" edad={40} />
      <Miobjeto datos = {mDatos}/>
      <Comentario datos1 = {sujeto}/>
    </div>
  );
}

export default App;
