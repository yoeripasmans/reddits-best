import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const H4 = styled.h4`
  font-size: 26px;
  font-weight: bold;
  color: #263D52;
  margin 43px 0 0 0;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: normal;
  color: #25496E;
  margin 15px 0;
`;

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
