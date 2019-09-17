import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const HeaderBlock = styled.header`
  margin: 0;
`;

const H1 = styled.h1`
  font-size: 48px;
  color: #263D52;
  margin: 0;
`;

const H3 = styled.h3`
  color: #8A95A5;
  font-size: 26px;
  margin: 0;
`;

const Header = (props) => {
  return (
    <HeaderBlock>
      <H1>{props.title}</H1>
      <H3>{props.subTitle}</H3>
    </HeaderBlock>
  );
};

Header.propTypes = {
  title: PT.string,
  subTitle: PT.string,
};

export default Header;
