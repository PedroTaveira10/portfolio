import styled from 'styled-components';

export const Content = styled.div`
  background: #06070c;
`;

export const Container = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  h1 {
    font-family: 'Fraunces';
    font-style: normal;
    font-size: 38px;
    color: #ffffff;
    width: 516px;
    height: 21px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-top: 60px;
    img {
      width: 40px;
    }
  }
`;

export const Geral = styled.div`
  display: flex;
  margin-top: 130px;
  gap: 40px;
  padding-bottom: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Carta = styled.div`
  background: linear-gradient(131.37deg, #1a1b29 0%, #050509 97.9%);
  box-shadow: 0px 2px 5px #56586f;
  border-radius: 10px;
  padding: 28px;
  width: 290px;
  position: relative;
  img {
    text-align: center;
  }
  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 48px;
    color: #fafafa;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    img {
      width: 16px;
    }
  }
  p {
    font-family: 'Blinker';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #b5b5be;
    text-align: center;
    margin-bottom: 40px;
  }
  span {
    font-family: 'Blinker';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }
  .cardButton {
    justify-content: center;
  }
`;
