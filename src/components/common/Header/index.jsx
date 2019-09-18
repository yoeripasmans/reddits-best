import React from 'react';
import PT from 'prop-types';

import { HeaderBlock, H1, H3 } from './styled';

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
