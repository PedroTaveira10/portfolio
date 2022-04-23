import { Container, Carta, Geral, Content } from './styles';
import { Button } from '../../styles/Button';
import Incon from '../../assets/imagens/icon_projetos.svg';
import Incon1 from '../../assets/imagens/dec.svg';
import card1 from '../../assets/imagens/img_ded.png';
import card2 from '../../assets/imagens/img_finance.png';
import card3 from '../../assets/imagens/img_grid.png';
import arrowIcon from '../../assets/imagens/arrow-icon.svg';

export default function NavBar() {
  return (
    <Content id="Projetos">
      <Container data-aos="fade-up">
        <div>
          <h1>
            <img alt="test" src={Incon} /> Projetos Desenvolvidos
          </h1>
        </div>

        <Geral>
          <Carta>
            <div>
              <img alt="test" src={card1} />
            </div>
            <div>
              <h3>
                <img alt="test" src={Incon1} />
                Projeto FlexBlog
              </h3>
              <p>
                Projeto desenvolvido durante o <span>curso de CSS FlexBox</span>{' '}
                da <span>Origamid</span>. A ideia era fazer um site com o modelo
                apresentado, contudo,
                <span>a utilização de FlexBox.</span>
              </p>
            </div>
            <Button className="cardButton">
              <a
                href="https://pedrotaveira10.github.io/FlexBlog/"
                rel="noreferrer"
                target="_blank"
              >
                Acessar na web <img alt="test" src={arrowIcon} />
              </a>
            </Button>
          </Carta>
          <Carta>
            <div>
              <img alt="test" src={card2} />
            </div>
            <div>
              <h3>
                <img alt="test" src={Incon1} />
                Projeto Finance
              </h3>
              <p>
                Projeto desenvolvido durante o <span> curso de Finance</span> da{' '}
                <span> RocketSeat</span>. A ideia era fazer um Projeto com o
                modelo apresentado, com a Utilização de
                <span>JavaScript.</span>
              </p>
            </div>
            <Button className="cardButton">
              <a
                href="https://pedrotaveira10.github.io/Finance/"
                rel="noreferrer"
                target="_blank"
              >
                Acessar na web <img alt="test" src={arrowIcon} />
              </a>
            </Button>
          </Carta>
          <Carta>
            <div>
              <img alt="test" src={card3} />
            </div>
            <div>
              <h3>
                <img alt="test" src={Incon1} />
                Projeto wildbeast
              </h3>
              <p>
                Projeto desenvolvido durante o{' '}
                <span>curso de CSS GridLayout</span> da <span>Origamid</span>. A
                ideia era fazer um site com o modelo apresentado, contudo,
                <span>a utilização de GridLayout.</span>
              </p>
            </div>
            <Button className="cardButton">
              <a
                href="https://pedrotaveira10.github.io/wildbeast/"
                rel="noreferrer"
                target="_blank"
              >
                Acessar na web <img alt="test" src={arrowIcon} />
              </a>
            </Button>
          </Carta>
        </Geral>
      </Container>
    </Content>
  );
}
