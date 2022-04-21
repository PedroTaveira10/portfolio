import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(
    60deg,
    rgba(6, 7, 12, 1) 35%,
    rgba(16, 19, 31, 1) 49%
  );
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1280px) {
    justify-content: center;
  }
`;

export const W50 = styled.div`
  // width: 50%;
  img {
    height: auto;
    top: 5%;
    left: 26%;
  }
  @media (max-width: 1480px) {
    img {
    }
    @media (max-width: 1280px) {
      img {
        height: 3px;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  // padding: 140px 140px 0;
  color: #fafafa;
  flex-direction: column;
  h1 {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }
  p {
    font-family: 'Blinker';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    width: 460px;
    padding-top: 40px;
  }
  span {
    font-family: 'Blinker';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
  }
  .Divider {
    height: 4px;
    width: 205px;
    background-color: #0066ff;
  }
  .Divider1 {
    height: 4px;
    width: 205px;
    display: inline;
    float: right;
    background-color: #0066ff;
  }
  @media (max-width: 450px) {
    font-size: 30px;
    text-align: center;
    p {
      width: auto;
    }
  }
`;
export const Geral = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  gap: 15px;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Carta = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  text-align: left;
  background: linear-gradient(131.37deg, #1a1b29 0%, #050509 97.9%);
  box-shadow: 0px 2px 5px #56586f;
  border-radius: 10px;
  border-radius: 10px;
  color: #e5e5e5;
  padding: 18px;
  border-radius: 10px;
  color: #e5e5e5;
  .circle {
    position: relative;

    &::before {
      content: ' ';
      position: absolute;
      top: 10px;
      left: -22px;
      height: 9px;
      width: 9px;
      border-radius: 100vw;
      background-color: #0066ff;
    }
    h3 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 23px;
    }
  }
  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
  }
  @media (max-width: 720px) {
  }
`;
