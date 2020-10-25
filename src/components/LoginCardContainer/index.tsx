import React from 'react';
import { Card, Box } from '@material-ui/core';

const LoginCardContainer: React.FC = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={1}
      minHeight="100vh"
    >
      <Card>{children}</Card>
    </Box>
  );
};

export default LoginCardContainer;
