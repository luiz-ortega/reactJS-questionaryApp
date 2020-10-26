import React from 'react';
import {
  Typography,
  Card,
  Box,
  Container,
  withStyles,
  createStyles,
} from '@material-ui/core';
import BackgroundGradient from '../../components/BackgroundGradient';
import LoginCardContainer from '../../components/LoginCardContainer';
import Input from '../../components/Input';

const Questionary: React.FC = () => {
  const test = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <BackgroundGradient>
      <LoginCardContainer>
        <Input label="teste" onChange={test} />
      </LoginCardContainer>
    </BackgroundGradient>
  );
};

export default Questionary;
