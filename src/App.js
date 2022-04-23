import './App.css';
import NavBar from './Componentes/navbar';
import Home from './Componentes/Home';
import Sobre from './Componentes/Sobre';
import Formacao from './Componentes/Formacao';
import Projetos from './Componentes/Projetos';
import Formu from './Componentes/Formu';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <div>
      <NavBar />
      <Home />
      <Sobre />
      <Formacao />
      <Projetos />
      <Formu />
    </div>
  );
}

export default App;
