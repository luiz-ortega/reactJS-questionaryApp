import React, { useEffect } from 'react';
import Question from '../../components/Question';
import { useQuestionary } from '../../hooks/questionary';

const Questionary: React.FC = () => {
  const { currentStep, setTotalSteps } = useQuestionary();

  useEffect(() => {
    setTotalSteps(4);
  });
  return (
    <>
      {currentStep === 0 && (
        <Question
          answerType="radio"
          question="Quantos funcionários tem a sua empresa?"
        />
      )}
      {currentStep === 1 && (
        <Question
          answerType="radio"
          question="Quantas pessoas tem a sua equipe?"
        />
      )}
      {currentStep === 2 && (
        <Question
          answerType="rating"
          question="Qual a sua satisfação com a empresa?"
        />
      )}
      {currentStep === 3 && (
        <Question
          answerType="rating"
          question="Como você avalia o seu chefe?"
        />
      )}
    </>
  );
};

export default Questionary;
