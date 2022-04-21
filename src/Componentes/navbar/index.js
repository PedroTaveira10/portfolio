import { Container } from './styles';

export default function NavBar() {
  return (
    <Container>
      <ul className="geral">
        <li>
          {' '}
          <a className="nav" href="#Sobre">
            Sobre
          </a>{' '}
        </li>
        <li>
          {' '}
          <a href="#Formacao">Formação</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#Projetos">Projetos</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#Contato">Contato</a>{' '}
        </li>
      </ul>
    </Container>
  );
}
