import React, { InputHTMLAttributes } from 'react';
import { TextField } from '@material-ui/core';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange(e: any): void;
}

const Input: React.FC<IInputProps> = ({ label, onChange }) => {
  return <TextField label={label} onChange={onChange} />;
};

export default Input;
