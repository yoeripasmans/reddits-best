import React from 'react';
import { LinkText, StyledLink } from './styled.js';

import { ReactComponent as BackIconSvg } from './../../../static/vectors/Back.svg';

const BackButton = () => {
  return (
    <StyledLink to="/">
      <BackIconSvg />
      <LinkText>Home</LinkText>
    </StyledLink>
  );
};

export default BackButton;
