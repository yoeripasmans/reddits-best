import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import  { ReactComponent as BackIconSvg } from '../../../static/vectors/back.svg';

const StyledLink = styled(Link)`
  color: #4583C2;
  font-size: 22px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
`;

const BackButton = () => {
  return (
    <StyledLink to="/"><BackIconSvg />Back</StyledLink>
  );
};

export default BackButton;
