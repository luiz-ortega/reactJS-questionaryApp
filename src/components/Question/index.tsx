import React from 'react';
import { Typography, Box, withStyles, createStyles } from '@material-ui/core';

import logo from '../../assests/logo.svg';
import Button from '../Button';
import RadioQuestionary from '../Questions/RadioQuestionary';
import RatingQuestionary from '../Questions/RatingQuestionary';
import Progress from '../Progress';

import { useQuestionary } from '../../hooks/questionary';

const styles = createStyles({
  header: {
    background: 'linear-gradient(to right, #0067AC, #063862)',
    height: 120,
    display: 'flex',
    alignItems: 'center',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    margin: '0px 50px',
  },
  question: { color: 'white', fontWeight: 600, fontSize: 24 },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#0067AC',
    height: 150,
    width: '100vw',
  },
  progressContainer: {
    position: 'absolute',
    right: 0,
    marginRight: 50,
  },
});

interface IQuestionProps {
  question: string;
  classes: any;
  answerType?: 'radio' | 'rating' | undefined;
}

const Question: React.FC<IQuestionProps> = ({
  answerType = 'radio',
  question,
  classes,
}) => {
  const {
    executeAnswer,
    currentStep,
    totalSteps,

    currentAnswer,
  } = useQuestionary();

  return (
    <>
      <Box className={classes.header}>
        <Box className={classes.headerContent}>
          <Typography className={classes.question}>{question}</Typography>
          <img src={logo} alt="logo" />
        </Box>
      </Box>
      <Box>
        {answerType === 'radio' && <RadioQuestionary question={question} />}
        {answerType === 'rating' && <RatingQuestionary question={question} />}
      </Box>
      <Box className={classes.footer}>
        <Button
          disabled={!currentAnswer.answer}
          onClick={executeAnswer}
          color="secondary"
        >
          Responder
        </Button>
        <Box className={classes.progressContainer}>
          <Progress value={(currentStep / totalSteps) * 100} />
        </Box>
      </Box>
    </>
  );
};

export default withStyles(styles)(Question);
