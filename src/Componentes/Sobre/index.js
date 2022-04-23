import {
  Container,
  W50,
  Content,
  Img1,
  Img2,
  DivGeral,
  Carta1,
  Carta2,
} from './styles';
import RostoSvg from '../../assets/imagens/rosto_sobre.svg';

export default function Sobre() {
  return (
    <Container id="Sobre" data-aos="fade-up">
      <W50>
        <Content>
          <ul>
            <img alt="test" src={RostoSvg} />
            <p>Um pouco sobre mim...</p>
          </ul>
          <ul1>
            <h2>Quais são as minhas habilidades e projetos desenvolvidos?</h2>
          </ul1>
          <p1>
            Sou estudante de <span>Tecnologia da Informação</span> pela
            universidade <span>UFERSA</span>, situada em Pau dos Ferros/RN.
            Gosto de estar sempre me desafiando com situações novas, treinando
            todos os conhecimentos que venho adquirindo através dos cursos
            intensivos.
          </p1>
        </Content>
      </W50>

      <DivGeral>
        <Img1></Img1>

        <Carta2>
          <h3>Habilidades</h3>
          <ul>
            <li>Bom trabalho em equipe.</li>
            <li>Comunicação em grupo</li>
            <li>Organização das atividades</li>
            <li>Direcionamento</li>
          </ul>
        </Carta2>

        <Carta1>
          <div>
            <span>3</span>
            <h3>PROJETOS CONCLUIDOS</h3>
          </div>
          <ul>
            <li>
              Prototipados no <span>FIGMA</span>
            </li>
            <li>
              Feitos com <span>HTML, CSS </span> e <span>Js</span>
            </li>
          </ul>
        </Carta1>

        <Img2></Img2>
      </DivGeral>
    </Container>
  );
}
