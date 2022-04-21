import styled from 'styled-components';
import Img from '../../assets/imagens/imagem1.svg';
import Imgg from '../../assets/imagens/imagem2.svg';

export const Container = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1050px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const W50 = styled.div`
  width: 50%;
  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 140px;
  color: #56586f;
  p {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
    padding: 30px;
  }
  h2 {
    font-family: 'Fraunces';
    font-weight: 700;
    font-size: 48px;
  }
  ul {
    display: flex;
    align-items: center;
    padding: 5px;

    img {
      width: 31px;
    }
  }
  p1 {
    font-family: 'Blinker';
    font-weight: 400;
    font-size: 20px;
  }
  span {
    font-family: 'Blinker';
    font-weight: 600;
    font-size: 15px;
    color: black;
  }
  @media (max-width: 550px) {
    p,
    h2,
    ul {
      line-height: 40px;
      padding: 15px;
      font-size: 30px;
    }
    @media (max-width: 450px) {
      p, h2 , ul {
        line-height: 30px;
        font-size: 15px;
        text-align: center;      
      }
      padding: 15px;
    }
  }
  
`;

export const Img1 = styled.div`
  background: url(${Img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 10px;
  grid-column: 1;
  grid-row: 1 / span 4;
  @media (max-width: 720px) {
  }
`;

export const Img2 = styled.div`
  background: url(${Imgg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  grid-column: 2;
  grid-row: 4 / span 4;
`;

export const DivGeral = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 30px);
  margin: 119px 0 156px;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    margin: 20px 0 80px;
  }
`;

export const Carta1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  background: linear-gradient(131.37deg, #1a1b29 0%, #050509 97.9%);
  border-radius: 10px;
  color: #e5e5e5;
  grid-column: 1;
  grid-row: 5 / span 3;
  padding: 15px;

  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
  }
  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #e5e5e5;
  }
  li {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    list-style-type: disc;
    list-style: none;
  }
  li::before {
    content: '• ';
    color: #0066ff;
  }

  @media (max-width: 720px) {
  }
`;

export const Carta2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  background: linear-gradient(131.37deg, #1a1b29 0%, #050509 97.9%);
  border-radius: 10px;
  color: #e5e5e5;
  grid-column: 2;
  grid-row: 1 / span 3;
  h3 {
    font-family: 'Poppins';
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }
  li {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    list-style-type: disc;
    text-align: left;
    list-style: none;
  }
  li::before {
    content: '• ';
    color: #0066ff;
  }

  @media (max-width: 720px) {
  }
`;
