import React, { InputHTMLAttributes } from 'react';
import { TextField } from '@material-ui/core';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange(e: any): void;
  error: boolean;
  helperText: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  onChange,
  error,
  helperText = '',
  className,
}) => {
  return (
    <TextField
      label={label}
      onChange={onChange}
      helperText={helperText}
      error={error}
      className={className}
    />
  );
};

export default Input;
