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
  classes: any;
}

const Input: React.FC<IInputProps> = ({
  label,
  onChange,
  error,
  helperText = '',
  className,
  id,
  classes,
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
      />
    </div>
  );
};

export default withStyles(styles)(Input);
