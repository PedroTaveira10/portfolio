import styled from 'styled-components';

export const Container = styled.div`
  .text-meio {
    padding-top: 100px;
  }
  h1 {
    font-family: 'Fraunces';
    font-weight: 700;
    font-size: 38px;
    display: flex;
    justify-content: center;
  }
  p {
    font-family: 'Fraunces';
    font-weight: 600;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .Divider {
    height: 3px;
    width: 94px;
    display: inline;
    float: right;
    background-color: #0066ff;
  }
  @media (max-width: 720px) {
  }
`;

export const Cartao = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 5px #56586f;
  border-radius: 10px;
  padding-top: 28px;
  width: 224px;
  height: 80px;
  position: relative;
  div {
    display: flex;
    justify-content: center;
  }
  img {
    justify-content: center;
    width: 25px;
  }
  p {
    font-family: 'Blinker';
    font-weight: 400;
    margin: 10px;
  }
`;

export const Geral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  padding-top: 68px;
`;
