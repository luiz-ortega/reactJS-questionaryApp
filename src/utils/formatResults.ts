interface Results {
  question: string;
  answers: any;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const formatResults = (results: Results[]) => {
  const formattedResults = results.map(result => ({
    question: result.question,
    answers: formatAnswer(result.answers),
  }));

  return formattedResults;
};

const formatAnswer: any = (answers: any) => {
  const formattedAnswers = [];
  for (const answer in answers) {
    formattedAnswers.push({
      resposta: answer,
      quantidade: answers[answer],
    });
  }

  return formattedAnswers;
};

export default formatResults;
