import React from 'react';
import {} from '@material-ui/core';
import Question from '../../components/Question';
import { useQuestionary } from '../../hooks/questionary';

const Questionary: React.FC = () => {
  const { currentStep } = useQuestionary();
  return (
    <>
      {currentStep === 1 && (
        <Question question="Quantos funcionários tem a sua empresa?" />
      )}
      {currentStep === 2 && (
        <Question question="Quantas pessoas tem a sua equipe?" />
      )}
      {currentStep === 3 && (
        <Question question="Qual a sua satisfação com a empresa?" />
      )}
      {currentStep === 4 && (
        <Question question="Como você avalia o seu chefe?" />
      )}
    </>
  );
};

export default Questionary;
