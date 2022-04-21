import './App.css';
import NavBar from './Componentes/navbar';
import Home from './Componentes/Home';
import Sobre from './Componentes/Sobre';
import Formacao from './Componentes/Formacao';
import Projetos from './Componentes/Projetos';
import Formu from './Componentes/Formu';

function App() {
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
