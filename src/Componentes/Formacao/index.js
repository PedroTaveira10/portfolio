import { Container, W50, Content, Carta, Geral, Wrapper } from './styles';
import Formacao from '../../assets/imagens/imagem_formacao.svg';

export default function Cursos() {
  return (
    <Wrapper>
      <Container id="Formacao">
        <W50>
          <img alt="test" src={Formacao} />
        </W50>

        <W50>
          <Content>
            <div className="divmeio">
              <div className="Divider"></div>
              <h1>Cursos e Graduações</h1>
              <div className="Divider1"></div>
            </div>
            <p>
              Abaixo listei minha <span>graduação</span> que estou realizando e
              alguns <span>cursos intensivos</span> que já foram concluidos.
              Minha atual graduação está sendo em{' '}
              <span>Tecnologia da Informação</span>, com data final prevista
              para 08/2025
            </p>
          </Content>

          <Geral>
            <Carta>
              <div>
                <h3>Bacharelado</h3>
                <span>2025</span>
              </div>
              <div className="circle">
                <h3>Tecnologia da informação</h3>
              </div>
              <div>
                <span>Ufersa</span>
              </div>
            </Carta>
            <Carta>
              <div>
                <h3>Bacharelado</h3>
                <span>2025</span>
              </div>
              <div className="circle">
                <h3>Tecnologia da informação</h3>
              </div>
              <div>
                <span>Ufersa</span>
              </div>
            </Carta>
            <Carta>
              <div>
                <h3>Bacharelado</h3>
                <span>2025</span>
              </div>
              <div className="circle">
                <h3>Tecnologia da informação</h3>
              </div>
              <div>
                <span>Ufersa</span>
              </div>
            </Carta>
          </Geral>
        </W50>
      </Container>
    </Wrapper>
  );
}
