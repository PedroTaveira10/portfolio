import styled from 'styled-components';
import Image from '../../assets/imagens/imagem_introducao.svg';

export const Wrapper = styled.div`
  background: linear-gradient(
    60deg,
    rgba(6, 7, 12, 1) 49%,
    rgba(16, 19, 31, 1) 49%
  );
`;

export const Container = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const W50 = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  padding: 140px;
  color: #fafafa;

  p {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
  }
  span {
    color: #0066ff;
  }
  .invit {
    font-family: 'Blinker';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
  }
  .Divider {
    margin: 13px 0;
    height: 4px;
    width: 428px;
    background-color: #0066ff;
  }
  @media (max-width: 760px) {
    padding: 35px;
    margin-top: 100px;
  }
`;

export const RedesSociais = styled.div`
  list-style: none;
  position: absolute;
  right: 60px;
  top: 256px;
  li {
    height: 34px;
  }
  @media (max-width: 900px) {
    top: 500px;
  }
`;

export const HomeImage = styled.img.attrs({ src: Image })`
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 992px) {
    width: 250px;
  }
  @media (max-width: 898px) {
    width: 450px;
  }
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 600px) {
    width: 400px;
   @media (max-width: 420px) {
    width: 300px;
  }
  }
`;
