import React from 'react';
import {
  Card,
  Box,
  createStyles,
  withStyles,
  CardContent,
} from '@material-ui/core';
import logo from '../../assests/logo_name.svg';

const styles = createStyles({
  card: {
    minWidth: 350,
    height: 385,
    marginTop: 50,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px',
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
      flexDirection="column"
      width={1}
      minHeight="100vh"
    >
      <img src={logo} alt="KPIs" />
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default withStyles(styles)(LoginCardContainer);
