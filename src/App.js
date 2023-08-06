import './App.css';
import BarraNavegacion from './component/BarraNavegacion/BarraNavegacion';
import Cabeza from './component/Cabeza/Cabeza';
import Carrusel from './component/Carrusel/Carrusel';
import Footer from './component/Footer/Footer';
import FormularioContacto from './component/FormularioContacto/FormularioContacto';
import Intro from './component/Intro/Intro';
import Nosotros from './component/Nosotros/Nosotros';
import Productos from './component/Productos/Productos';

function App() {
  return ( 
    <div>
      <Cabeza />
      <BarraNavegacion />
      <Carrusel /> 
      <Intro />
      <Productos />
      <Nosotros />
      <FormularioContacto />
      <Footer />
    </div>
  );
}

export default App;
