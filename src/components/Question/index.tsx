import React from 'react';
import {
  Typography,
  Card,
  Box,
  Container,
  withStyles,
  createStyles,
} from '@material-ui/core';

const Question: React.FC = () => {
  return (
    <>
      <Box
        style={{
          background: 'linear-gradient(to right, #0067AC, #063862)',
          height: 120,
        }}
      >
        <Typography style={{ color: 'white' }}>Pergunta ..... ?</Typography>
      </Box>
      <Box
        style={{
          position: 'fixed',
          bottom: 0,
          backgroundColor: '#0067AC',
          height: 150,
          width: '100vw',
        }}
      >
        <Typography style={{ color: 'white' }}>Pergunta ..... ?</Typography>
      </Box>
    </>
  );
};

export default Question;
