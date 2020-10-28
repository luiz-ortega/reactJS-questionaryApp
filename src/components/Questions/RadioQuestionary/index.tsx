import React, { useEffect } from 'react';
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  withStyles,
  createStyles,
  Box,
} from '@material-ui/core';

import { useQuestionary } from '../../../hooks/questionary';

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
  question: string;
}

const RadioQuestionary: React.FC<IRatingQuesitonaryProps> = ({
  classes,
  question,
}) => {
  const { setCurrentAnswer } = useQuestionary();

  const [answer, setAnswer] = React.useState('');

  useEffect(() => {
    setCurrentAnswer({ question, answer, options });
  }, [answer, setCurrentAnswer, question]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl component="fieldset">
      <Box className={classes.container}>
        <RadioGroup
          className={classes.radioGroupContainer}
          value={answer}
          onChange={handleChange}
        >
          {options.map(option => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio color="primary" />}
              label={option}
            />
          ))}
        </RadioGroup>
      </Box>
    </FormControl>
  );
};

export default withStyles(styles)(RadioQuestionary);
