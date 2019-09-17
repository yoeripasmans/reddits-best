import React from 'react';
import PT from 'prop-types';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h3>{props.subTitle}</h3>
    </header>
  );
};

Header.propTypes = {
  title: PT.string,
  subTitle: PT.string,
};

export default Header;
