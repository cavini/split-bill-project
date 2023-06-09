import React from 'react';
import { ButtonComponentProps } from './@types';

const Button = ({ text }: ButtonComponentProps) => {
  return <button className="button">{text}</button>;
};

export default Button;
