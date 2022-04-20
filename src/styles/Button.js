import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  /* justify-content: center; */
  a {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.8rem 2rem;
    color: hsl(0, 0%, 100%);
    text-decoration: none;
    background-color: transparent;
    border-radius: 10px;
    border: solid 4px transparent;
    background-image: linear-gradient(186deg, rgba(0,102,255,1) 0%, rgba(38,0,147,1) 100%), linear-gradient(101deg, #0066FF, #260093);
    background-origin: border-box;
    box-shadow: 2px 1000px 1px #000000 inset;
    background-origin: border-box;
  background-clip: content-box, border-box;

    img {
      width: 22px;
    }
  }
`;
export const Button1 = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  padding-right:62px;
  /* justify-content: center; */
  a {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.8rem 2rem;
    color: #0066FF;
    text-decoration: none;
    background-color: transparent;
    border-radius: 10px;
    border: solid 4px transparent;
    background-image: linear-gradient(186deg, rgba(0,102,255,1) 0%, rgba(38,0,147,1) 100%), linear-gradient(101deg, #0066FF, #260093);
    background-origin: border-box;
    box-shadow: 2px 1000px 1px #fff inset;

    img {
      width: 22px;
    }
  }
`;
