import React from 'react';
import {
  Typography,
  Box,
  FormControl,
  withStyles,
  createStyles,
} from '@material-ui/core';

import Button from '../../Button';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
}

const RatingQuestionary: React.FC<IRatingQuestionaryProps> = ({ classes }) => {
  const [value, setValue] = React.useState(0);

  return (
    <FormControl>
      <Box className={classes.container}>
        <Box className={classes.ratingContainer}>
          <Typography className={classes.label}>Pouco satisfeito</Typography>

          {options.map(option => (
            <Button
              key={option}
              onClick={() => setValue(option)}
              color={option === value ? 'primary' : 'secondary'}
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
