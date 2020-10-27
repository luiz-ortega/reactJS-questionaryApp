import React from 'react';
import { Container, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  container: {
    background: 'linear-gradient(#0067AC, #063862)',
    height: '100vh',
    maxWidth: '100%',
  },
});

interface IBackgroundGradientProps {
  classes: any;
  children: any;
}

const BackgroundGradient: React.FC<IBackgroundGradientProps> = ({
  children,
  classes,
}) => {
  return (
    <Container classes={{ root: classes.container }}>{children}</Container>
  );
};

export default withStyles(styles)(BackgroundGradient);
