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
    border: 3px solid;

    border-image: linear-gradient(
      180deg,
      rgb(0, 102, 255) 0%,
      rgb(38, 0, 147) 100%
    );
    border-image-slice: 1;

    img {
      width: 22px;
    }
  }
`;
