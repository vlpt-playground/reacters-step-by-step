import React from 'react';
import './Responsive.scss';

const Responsive = ({ children, className }) => {
  return <div className={`Responsive ${className || ''}`}>{children}</div>;
};

export default Responsive;
