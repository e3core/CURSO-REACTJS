import logo from './logo.svg';
import './App.css';
import './props';
import {Objeto,Contexto} from './props'; // de aqui viene el componente con props

function App() {
  return (
    <>
    <h1>Bienvenidos al curso de react.js</h1>
    <p> creando mi primer componente tonto</p>
    {/* aqui se agrega un componente tonto con props( que sirve para poder agregar atributos*/}
    <Contexto id="section_dos"
              direccion="https://www.siemens.com/pe/es.html"
              />
    <Objeto imagen="https://gagadget.com/media/post_big/Siemens.jpg" titulo="siemens"/>
    </>
  );
}



export default App;
