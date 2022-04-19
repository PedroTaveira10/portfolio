import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(60deg, rgba(6,7,12,1) 49%, rgba(16,19,31,1) 49%);
`;

export const Container = styled.div`
  max-width:1640px;
  margin: 0 auto;
  display: flex;
  @media(max-width:720px){
  }
`;

export const W50 = styled.div`
width: 50%;
`;
export const Content = styled.div`
padding: 140px;
color: #FAFAFA;
p {
  font-family: 'Fraunces';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 16px;
}
span {
    color: #0066FF;
} .invit {
font-family: 'Blinker';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
margin-bottom: 20px;
} h2 {
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 48px;
} .Divider {
  margin: 13px 0;
  height: 4px;
  width:428px;
  background-color: #0066FF;
}
`;


export const RedesSociais = styled.div`
list-style: none;
position: absolute;
right: 60px;
top:256px;
li {
  height: 34px;
}
`;