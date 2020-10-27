import React, { ButtonHTMLAttributes } from 'react';
import { Button as MaterialUiButton } from '@material-ui/core';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
}

const Button: React.FC<IButtonProps> = ({ color, children, ...rest }) => {
  return (
    <MaterialUiButton {...rest} variant="contained" size="large" color={color}>
      {children}
    </MaterialUiButton>
  );
};

export default Button;
