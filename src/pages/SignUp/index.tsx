import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, withStyles, createStyles } from '@material-ui/core';

import BackgroundGradient from '../../components/BackgroundGradient';
import LoginCardContainer from '../../components/LoginCardContainer';
import Input from '../../components/Input';
import Button from '../../components/Button';

const styles = createStyles({
  typography: {
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 25,
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15,
  },
});

const SignUp: React.FC<{ classes: any }> = ({ classes }) => {
  const test = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <BackgroundGradient>
      <LoginCardContainer>
        <Typography className={classes.typography} variant="h5" align="center">
          Cadastro
        </Typography>

        <Input
          className={classes.input}
          label="Nome"
          onChange={test}
          error={false}
          helperText=""
        />

        <Input
          className={classes.input}
          label="E-mail"
          onChange={test}
          error={false}
          helperText=""
        />

        <Input
          className={classes.input}
          label="Senha"
          onChange={test}
          error={false}
          helperText=""
        />

        <div className={classes.button}>
          <Button color="primary">Cadastrar</Button>
        </div>
        <div className={classes.link}>
          <Link component={RouterLink} to="/">
            Ir para login
          </Link>
        </div>
      </LoginCardContainer>
    </BackgroundGradient>
  );
};

export default withStyles(styles)(SignUp);
