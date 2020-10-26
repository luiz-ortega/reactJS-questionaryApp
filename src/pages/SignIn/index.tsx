import React from 'react';
import BackgroundGradient from '../../components/BackgroundGradient';
import LoginCardContainer from '../../components/LoginCardContainer';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const test = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <BackgroundGradient>
      <LoginCardContainer>
        <Input
          label="teste"
          onChange={test}
          error={false}
          helperText="asdasd"
        />
        <Input
          label="teste"
          onChange={test}
          error={false}
          helperText="asdasd"
        />
        <Input
          label="teste"
          onChange={test}
          error={false}
          helperText="asdasd"
        />
      </LoginCardContainer>
    </BackgroundGradient>
  );
};

export default SignIn;
