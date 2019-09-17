import React from 'react';
import PT from 'prop-types';

const TextBlock = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};

TextBlock.propTypes = {
  title: PT.string,
  text: PT.string,
};

export default TextBlock;
