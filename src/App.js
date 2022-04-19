import './App.css';
import NavBar from './Componentes/navbar';
import Home from './Componentes/Home';
import Main from './Componentes/Main';
import Cursos from './Componentes/Cursos';
import Projetos from './Componentes/Projetos';
import Formu from './Componentes/Formu';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Main />
      <Cursos />
      <Projetos />
      <Formu />
    </div>
  );
}

export default App;
