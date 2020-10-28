import React, { createContext, useState, useContext } from 'react';

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
  const [totalSteps, setTotalSteps] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState<Answer>({} as Answer);
  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem('@KPIS:results');

    if (savedResults) {
      return JSON.parse(savedResults);
    }

    return [];
  });
  const [questionsAnswers, setQuestionsAnswers] = useState([]);

  const executeAnswer = () => {
    console.log(currentAnswer);
    setCurrentStep(state => state + 1);
    setCurrentAnswer({} as Answer);

    // const answers = localStorage.getItem('@KPIS:results');

    // localStorage.setItem(
    //   '@KPIS:user',
    //   JSON.stringify({ name, email, password }),
    // );

    // setData({ name, email, password });
    // setQuestionsAnswers();
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
