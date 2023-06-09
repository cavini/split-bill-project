import React from 'react';
import { ButtonComponentProps } from './@types';

const Button = ({ text, onClick }: ButtonComponentProps) => {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};

export default Button;
