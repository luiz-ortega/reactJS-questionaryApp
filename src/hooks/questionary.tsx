// import React, { createContext, useCallback, useState, useContext } from 'react';

// const QuestionaryContext = createContext<QuestionaryContextData>(
//   {} as QuestionaryContextData,
// );

// interface Answer {
//   question: string;
//   answer: string;
// }

// interface QuestionaryContextData {
//   executeAsnwer(answer: Answer): void;
//   reset(): void;
//   answer: Answer;
// }

// const QuestionaryProvider: React.FC = ({ children }) => {
//   const [data, setData] = useState<SignInCredentials>(() => {
//     const user = localStorage.getItem('@KPIS:user');

//     if (user) {
//       return JSON.parse(user);
//     }

//     return false;
//   });

//   const signIn = useCallback(async ({ name, email, password }) => {
//     localStorage.setItem(
//       '@KPIS:user',
//       JSON.stringify({ name, email, password }),
//     );

//     setData({ name, email, password });
//   }, []);

//   const signOut = useCallback(() => {
//     localStorage.removeItem('@KPIS:user');

//     setData({} as SignInCredentials);
//   }, []);

//   return (
//     <QuestionaryContext.Provider value={{ user: data, signIn, signOut }}>
//       {children}
//     </QuestionaryContext.Provider>
//   );
// };

// function useQuestionary(): QuestionaryContextData {
//   const context = useContext(QuestionaryContext);

//   if (!context) {
//     throw new Error('useAuth must be used within an QuestionaryProvider');
//   }

//   return context;
// }

// export { QuestionaryProvider, useQuestionary };
