import React from 'react';
import  { ReactComponent as BackIconSvg } from '../../../static/vectors/back.svg';
import { Link } from 'react-router-dom';

const BackButton = (props) => {
  return (
    <Link to="/"><BackIconSvg /> Back</Link>
  );
};

export default BackButton;
