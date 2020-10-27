import React from 'react';
import {
  Typography,
  Card,
  Box,
  Container,
  withStyles,
  createStyles,
} from '@material-ui/core';
import Question from '../../components/Question';

const Questionary: React.FC = () => {
  return <Question question="Quantos funcionários tem a sua empresa?" />;
};

export default Questionary;
