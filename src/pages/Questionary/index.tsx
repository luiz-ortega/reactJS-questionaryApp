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

const Questionary: React.FC = () => {
  return (
    <BackgroundGradient>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={1}
        minHeight="100vh"
        // fixed
      >
        <Card>
          <Typography>Questionary</Typography>
        </Card>
      </Box>
    </BackgroundGradient>
  );
};

export default Questionary;
