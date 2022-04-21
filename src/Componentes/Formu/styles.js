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
  }@media (max-width: 370px) {
    h1{
      font-size:24px;
    }
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
  padding-bottom: 50px;
  @media (max-width: 920px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;
export const FormGeral = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 2px 5px #56586f;
  border-radius: 10px;
  width: 900px;
  height: 380px;
  position: relative;
  justify-content: center;
  padding: 70px;
  .row {
    display: flex;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .row1 {
      display: flex;
      flex-direction: column;
      padding: 30px;
      label {
        font-family: Poppins;
        font-size: 14px;
      }
      .input {
        padding: 10px;
        width: 371px;
        height: 45px;
        margin: 5px 0;
        box-sizing: border-box;
        border: 4px solid #ccc;
        font-family: Poppins;
        font-size: 12px;
        border-radius: 10px;
        border: solid 4px transparent;

        background-image: linear-gradient(
            186deg,
            rgba(0, 102, 255, 1) 0%,
            rgba(38, 0, 147, 1) 100%
          ),
          linear-gradient(101deg, #0066ff, #260093);
        background-origin: border-box;
        box-shadow: 2px 1000px 1px #e9e9e9 inset;
      }
      @media (max-width: 900px) {
        flex-wrap: wrap;
        gap: 15px;
      }
    }
  }
  @media (max-width: 1002px) {
    width: 400px;
    height: 580px;
  }
  @media (max-width: 450px) {
    width: 300px;
    height: 480px;
  }
`;

export const Label = styled.div`
  padding: 30px;

  label {
    font-family: Poppins;
    font-size: 14px;
  }
  textarea {
    padding: 4px;
    width: 380px;
    height: 200px;
    font-family: Poppins;
    font-size: 12px;
    margin: 5px 0;
    box-sizing: border-box;
    box-sizing: border-box;
    border: 4px solid #ccc;
    border-radius: 10px;
    border: solid 4px transparent;

    background-image: linear-gradient(
        186deg,
        rgba(0, 102, 255, 1) 0%,
        rgba(38, 0, 147, 1) 100%
      ),
      linear-gradient(101deg, #0066ff, #260093);
    background-origin: border-box;
    box-shadow: 2px 1000px 1px #e9e9e9 inset;
  }
  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;
