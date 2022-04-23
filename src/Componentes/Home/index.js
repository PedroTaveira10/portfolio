import {
  Container,
  W50,
  Content,
  RedesSociais,
  Wrapper,
  HomeImage,
} from './styles';
import { Button } from '../../styles/Button';
import LogoFace from '../../assets/imagens/facebook1.svg';
import LogoInsta from '../../assets/imagens/instagram1.svg';
import LogoLinkedin from '../../assets/imagens/linkedin1.svg';
import LogoGithub from '../../assets/imagens/github1.svg';
import downloadIcon from '../../assets/imagens/Download-icon.svg';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <W50>
          <Content>
            <p>Olá,me chamo</p>
            <h2>Pedro Taveira</h2>
            <div className="Divider"></div>
            <h2>
              <span>Frontend</span> Developer Jr.
            </h2>
            <h2>
              <span>UI</span> Designer Jr.
            </h2>
            <p className="invit">
              Olá, convido você a conhecer um pouco sobre mim e dos meus
              projetos pessoais. Sejam bem-vindo e espero que goste do que lhe
              será apresentado.
            </p>
            <Button>
              <a href="/" download>
                DOWNLOAD CV
                <img alt="test" src={downloadIcon} />
              </a>
            </Button>
          </Content>
        </W50>
        <W50>
          <Content>
            <HomeImage />
          </Content>
          <RedesSociais>
            <li>
              <a href="https://www.facebook.com/pedrohenrique.taveira">
                <img alt="Facebook" src={LogoFace} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pedrohenriquetaveira/">
                <img alt="Instagram" src={LogoInsta} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pedro-taveira10/">
                <img alt="Linkedin" src={LogoLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/PedroTaveira10">
                <img alt="github" src={LogoGithub} />
              </a>
            </li>
          </RedesSociais>
        </W50>
      </Container>
    </Wrapper>
  );
}
