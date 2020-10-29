import React, { useEffect } from 'react';
import {
  Typography,
  Box,
  FormControl,
  withStyles,
  createStyles,
} from '@material-ui/core';

import Button from '../../Button';
import { useQuestionary } from '../../../hooks/questionary';

const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '70vh',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 1100,
  },
  label: {
    fontSize: 18,
    fontWeight: 600,
    color: '#0067AC',
  },
});

interface IRatingQuestionaryProps {
  classes: any;
  question: string;
}

const RatingQuestionary: React.FC<IRatingQuestionaryProps> = ({
  classes,
  question,
}) => {
  const { setCurrentAnswer, currentAnswer } = useQuestionary();

  const [answer, setAnswer] = React.useState('');

  useEffect(() => {
    setCurrentAnswer({ question, answer, options });
  }, [answer, setCurrentAnswer, question]);

  const handleChange = (option: string) => {
    setAnswer(option);
  };

  return (
    <FormControl>
      <Box className={classes.container}>
        <Box className={classes.ratingContainer}>
          <Typography className={classes.label}>Pouco satisfeito</Typography>

          {options.map(option => (
            <Button
              key={option}
              onClick={() => handleChange(option)}
              color={option === currentAnswer.answer ? 'primary' : 'secondary'}
            >
              {option}
            </Button>
          ))}

          <Typography className={classes.label}>Muito satisfeito</Typography>
        </Box>
      </Box>
    </FormControl>
  );
};

export default withStyles(styles)(RatingQuestionary);
