import React from 'react';
import PT from 'prop-types';

import { H4, P } from './styled';

const TextBlock = (props) => {
  return (
    <div>
      <H4>{props.title}</H4>
      <P>{props.text}</P>
    </div>
  );
};

TextBlock.propTypes = {
  title: PT.string,
  text: PT.string,
};

export default TextBlock;
