import { Container, Cartao, Geral } from './styles';
import localizacao from '../../assets/imagens/localizacao_icon.svg';
import celular from '../../assets/imagens/telefone_icon.svg';
import email from '../../assets/imagens/email_icon.svg';

export default function formu() {
  return (
    <Container>
      <div className="text-meio">
        <h1>Entre em Contato Comigo</h1>
        <p>
          <div className="Divider"></div> Segue abaixo os meios de contato
          <div className="Divider"></div>
        </p>
      </div>
      <Geral>
        <Cartao>
          <div>
            <img alt="test" src={localizacao} />
          </div>
          <div>
            <p>Sousa-Paraiba</p>
          </div>
        </Cartao>
        <Cartao>
          <div>
            <img alt="test" src={celular} />
          </div>
          <div>
            <p>+55 (083) 98159-9528</p>
          </div>
        </Cartao>
        <Cartao>
          <div>
            <img alt="test" src={email} />
          </div>
          <div>
            <p>pedroyoficial@gmail.com</p>
          </div>
        </Cartao>
      </Geral>
    </Container>
  );
}
