import React from 'react';
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  withStyles,
  createStyles,
  Box,
} from '@material-ui/core';

const options = [
  '1 até 50',
  '50 até 100',
  '101 até 200',
  '201 até 500',
  'Mais de 500',
];

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '70vh',
  },
  radioGroupContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '30vh',
    marginLeft: 50,
  },
});

interface IRatingQuesitonaryProps {
  classes: any;
}

const RadioQuestionary: React.FC<IRatingQuesitonaryProps> = ({ classes }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl component="fieldset">
      <Box className={classes.container}>
        <RadioGroup
          className={classes.radioGroupContainer}
          value={value}
          onChange={handleChange}
        >
          {options.map(question => (
            <FormControlLabel
              key={question}
              value={question}
              control={<Radio color="primary" />}
              label={question}
            />
          ))}
        </RadioGroup>
      </Box>
    </FormControl>
  );
};

export default withStyles(styles)(RadioQuestionary);
