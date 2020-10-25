import React from 'react';
import {
  Typography,
  Card,
  Box,
  Container,
  withStyles,
  createStyles,
} from '@material-ui/core';
import Button from '../../components/Button';

const styles = createStyles({
  container: {
    background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
    height: '100vh',
  },
});

const Questionary: React.FC<{ classes: any }> = ({ classes }) => {
  return (
    <Container
      classes={{ root: classes.container }}
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
      // width={1}
      // minHeight="100vh"
      // fixed
    >
      <Card>
        <Typography>Questionary</Typography>
        <Button color="primary">Test</Button>
      </Card>
    </Container>
  );
};

export default withStyles(styles)(Questionary);
