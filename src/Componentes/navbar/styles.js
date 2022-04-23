import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  ul {
    display: flex;
    margin: 0 auto;
    gap: 6vw;
    margin-top: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    a {
      text-decoration: none;
      color: #fafafa;
      &:hover {
        color: #0066ff;
      }
    }
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;
