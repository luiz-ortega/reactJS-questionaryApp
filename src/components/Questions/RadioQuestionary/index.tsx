import React from 'react';
import {
  Typography,
  Card,
  Box,
  Container,
  withStyles,
  createStyles,
  FormControlLabel,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
} from '@material-ui/core';

const options = [
  '1 até 50',
  '50 até 100',
  '101 até 200',
  '201 até 500',
  'Mais de 500',
];

const RadioQuestionary: React.FC = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl component="fieldset">
      <pre>{JSON.stringify(value)}</pre>
      <RadioGroup value={value} onChange={handleChange}>
        {options.map(question => (
          <FormControlLabel
            key={question}
            value={question}
            control={<Radio color="primary" />}
            label={question}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioQuestionary;
