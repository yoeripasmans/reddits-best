import styled from 'styled-components';

export const HeaderBlock = styled.header`
  margin: 0;

  @media (max-width: 720px) {
    padding: 0 16px;
  }
`;

export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #263D52;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 42px;
  }
`;

export const H3 = styled.h3`
  color: #8A95A5;
  font-size: 26px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;
