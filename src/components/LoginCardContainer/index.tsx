import React from 'react';
import { Card, Box, createStyles, withStyles } from '@material-ui/core';

const styles = createStyles({
  card: {
    minWidth: 300,
    minHeight: 300,
  },
});

const LoginCardContainer: React.FC<{ classes: any }> = ({
  children,
  classes,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={1}
      minHeight="100vh"
    >
      <Card className={classes.card}>{children}</Card>
    </Box>
  );
};

export default withStyles(styles)(LoginCardContainer);
