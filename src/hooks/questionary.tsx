import React, { createContext, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const QuestionaryContext = createContext<QuestionaryContextData>(
  {} as QuestionaryContextData,
);

interface QuestionaryContextData {
  executeAnswer(): void;
  results: Results[];
  setTotalSteps(totalStep: number): void;
  totalSteps: number;
  currentAnswer: Answer;
  setCurrentAnswer(answer: Answer): void;
  currentStep: number;
  setCurrentStep(step: number): void;
  questionsAnswers: any;
}

interface Answers {
  [key: string]: string;
}

interface Results {
  question: string;
  answers: Answers;
}

interface Answer {
  question: string;
  answer: string;
  options: string[];
}

const QuestionaryProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [totalSteps, setTotalSteps] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<Answer>({} as Answer);
  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem('@KPIS:results');

    if (savedResults) {
      return JSON.parse(savedResults);
    }

    return [];
  });
  const [questionsAnswers, setQuestionsAnswers] = useState<Results[]>(() => {
    if (results.length > 0) {
      return results;
    }
    return [];
  });

  useEffect(() => {
    if (totalSteps > 1 && currentStep === totalSteps) {
      localStorage.setItem(
        '@KPIS:results',
        JSON.stringify([...questionsAnswers]),
      );
      setResults(questionsAnswers);
      history.push('/results');
    }
  }, [totalSteps, currentStep, questionsAnswers, history]);

  const executeAnswer = () => {
    const { question, answer, options } = currentAnswer;

    const questionExists = results.find(
      (result: { question: string }) => result.question === question,
    );

    if (questionExists) {
      const index = questionsAnswers.findIndex(
        questionAnswer => questionAnswer.question === question,
      );
      const newQuestion = {
        ...questionExists,
        answers: {
          ...questionExists.answers,
          [answer]: questionExists.answers[answer] + 1,
        },
      };
      questionsAnswers.splice(index, 1, newQuestion);
    } else {
      let answers = options.reduce((acc, option) => {
        acc = { ...acc, [option]: 0 };
        return acc;
      }, {});
      answers = { ...answers, [answer]: 1 };
      setQuestionsAnswers([...questionsAnswers, { question, answers }]);
    }

    setCurrentStep(state => state + 1);
    setCurrentAnswer({} as Answer);
  };

  return (
    <QuestionaryContext.Provider
      value={{
        results,
        executeAnswer,
        setTotalSteps,
        totalSteps,
        currentAnswer,
        setCurrentAnswer,
        currentStep,
        setCurrentStep,
        questionsAnswers,
      }}
    >
      {children}
    </QuestionaryContext.Provider>
  );
};

function useQuestionary(): QuestionaryContextData {
  const context = useContext(QuestionaryContext);

  if (!context) {
    throw new Error('useAuth must be used within an QuestionaryProvider');
  }

  return context;
}

export { QuestionaryProvider, useQuestionary };
