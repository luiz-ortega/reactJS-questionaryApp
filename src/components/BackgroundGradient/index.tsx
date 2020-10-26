import React from 'react';
import { Container, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  container: {
    background: 'linear-gradient(#0067AC, #05477E)',
    height: '100vh',
    maxWidth: '100%',
  },
});

const BackgroundGradient: React.FC<{ classes: any; children: any }> = ({
  children,
  classes,
}) => {
  return (
    <Container classes={{ root: classes.container }}>{children}</Container>
  );
};

export default withStyles(styles)(BackgroundGradient);
