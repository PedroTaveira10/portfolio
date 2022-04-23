import { Container, Cartao, Geral, FormGeral, Label } from './styles';
import { Button1 } from '../../styles/Button';
import localizacao from '../../assets/imagens/localizacao_icon.svg';
import celular from '../../assets/imagens/telefone_icon.svg';
import email from '../../assets/imagens/email_icon.svg';
import Iconmail from '../../assets/imagens/icon-msg.svg';

export default function formu() {
  return (
    <Container id="Contato">
      <div className="text-meio" data-aos="fade-up">
        <h1>Entre em Contato Comigo</h1>
        <p>
          <div className="Divider"></div> Segue abaixo os meios de contato
          <div className="Divider"></div>
        </p>
      </div>

      <Geral data-aos="fade-up">
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
      <Geral>
        <FormGeral>
          <div className="row">
            <div className="row1">
              <div>
                <label>Nome Completo</label>
                <br></br>
                <input className="input"></input>
              </div>

              <div>
                <label>E-mail</label>
                <br></br>
                <input className="input"></input>
              </div>

              <div className="Label">
                <label>Telefone</label>
                <br></br>
                <input className="input"></input>
              </div>
            </div>

            <Label>
              <label>Insira um texto</label>
              <br></br>
              <textarea>Sua Mensagem</textarea>
            </Label>
          </div>
          <Button1>
            <a href="/">
              ENVIAR
              <img alt="test" src={Iconmail} />
            </a>
          </Button1>
        </FormGeral>
      </Geral>
    </Container>
  );
}
