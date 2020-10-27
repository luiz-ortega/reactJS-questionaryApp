import React from 'react';
import { Button as MaterialUiButton } from '@material-ui/core';

interface IButtonProps {
  color: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
}

const Button: React.FC<IButtonProps> = ({ color, children }) => {
  return (
    <MaterialUiButton variant="contained" size="large" color={color}>
      {children}
    </MaterialUiButton>
  );
};

export default Button;
