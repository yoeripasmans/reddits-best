import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import  { ReactComponent as BackIconSvg } from '../../../static/vectors/back.svg';

const StyledLink = styled(Link)`
  color: #4583C2;
  font-size: 22px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  margin-bottom: 33.5px;
`;

const BackButton = () => {
  return (
    <StyledLink to="/"><BackIconSvg />Back</StyledLink>
  );
};

export default BackButton;
