import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, withStyles, createStyles } from '@material-ui/core';
import * as Yup from 'yup';
import { Errors, getValidationErrors } from '../../utils/getValidationErrors';

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

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC<{ classes: any }> = ({ classes }) => {
  const [data, setData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<Errors>({});

  const submit = async () => {
    try {
      setError({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name é obrigatório.'),
        email: Yup.string()
          .required('Email é obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string().required('Senha é obrigatória.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        setError({ ...errors });
      }
    }
  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  return (
    <BackgroundGradient>
      <LoginCardContainer>
        <Typography className={classes.typography} variant="h5" align="center">
          Cadastro
        </Typography>

        <Input
          id="name"
          className={classes.input}
          label="Nome"
          onChange={handleChange}
          error={false}
          helperText={error ? error.name : ''}
        />

        <Input
          id="email"
          className={classes.input}
          label="E-mail"
          onChange={handleChange}
          error={false}
          helperText={error ? error.email : ''}
        />

        <Input
          id="password"
          className={classes.input}
          label="Senha"
          onChange={handleChange}
          error={false}
          helperText={error ? error.password : ''}
          type="password"
        />

        <div className={classes.button}>
          <Button onClick={submit} color="primary">
            Registrar
          </Button>
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
