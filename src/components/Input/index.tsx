import React, { InputHTMLAttributes } from 'react';
import { TextField, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  container: {
    position: 'relative',
    height: 70,
  },
});

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange(e: any): void;
  error: boolean;
  helperText: string;
  classes?: any;
  type?: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  onChange,
  error,
  helperText = '',
  className,
  id,
  classes,
  type = 'text',
}) => {
  return (
    <div className={classes.container}>
      <TextField
        id={id}
        fullWidth
        label={label}
        onChange={onChange}
        helperText={helperText}
        error={error}
        className={className}
        type={type}
      />
    </div>
  );
};

export default withStyles(styles)(Input);
