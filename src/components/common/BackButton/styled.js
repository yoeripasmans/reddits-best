import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkText = styled.span`
  margin-left: 12px;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  color: #4583C2;
  font-size: 22px;
  text-decoration: none;
  margin-bottom: 33.5px;
  position: relative;
  display: flex;
  align-items: center;
  width: 90px;

  @media (max-width: 600px) {
    margin-bottom: 18px;
    padding: 0 16px;
    width: 120px;
  }
`;
