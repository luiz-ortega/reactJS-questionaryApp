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

import logo from '../../assests/logo.svg';
import Button from '../Button';
import RadioQuestionary from '../Questions/RadioQuestionary';
import RatingQuestionary from '../Questions/RatingQuestionary';
import Progress from '../Progress';

const styles = createStyles({
  header: {
    background: 'linear-gradient(to right, #0067AC, #063862)',
    height: 120,
    display: 'flex',
    alignItems: 'center',
  },
  question: { color: 'white', fontWeight: 600, fontSize: 24 },
  footer: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#0067AC',
    height: 150,
    width: '100vw',
  },
});

interface IQuestionProps {
  question: string;
  classes: any;
}

const Question: React.FC<IQuestionProps> = ({ question, classes }) => {
  return (
    <>
      <Box className={classes.header}>
        <Typography className={classes.question}>{question}</Typography>
        <img src={logo} alt="logo" />
      </Box>
      <Box>
        <RadioQuestionary />
        <RatingQuestionary />
      </Box>
      <Box className={classes.footer}>
        <Box>
          <Button color="secondary">Responder</Button>
          <Progress value={100} />
        </Box>
      </Box>
    </>
  );
};

export default withStyles(styles)(Question);
