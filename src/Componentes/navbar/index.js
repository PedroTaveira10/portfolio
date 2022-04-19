import { Container } from './styles';

export default function NavBar() {
  return (
    <Container>
      <ul>
        <li>
          {' '}
          <a href="/">Sobre</a>{' '}
        </li>
        <li>
          {' '}
          <a href="/">Formação</a>{' '}
        </li>
        <li>
          {' '}
          <a href="/">Projetos</a>{' '}
        </li>
        <li>
          {' '}
          <a href="/">Contato</a>{' '}
        </li>
      </ul>
    </Container>
  );
}
