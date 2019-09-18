import React from 'react';
import { StyledBackIconSvg, LinkText, StyledLink } from './styled.js';

const BackButton = () => {
  return (
    <StyledLink to="/">
      <StyledBackIconSvg />
      <LinkText>Home</LinkText>
    </StyledLink>
  );
};

export default BackButton;
