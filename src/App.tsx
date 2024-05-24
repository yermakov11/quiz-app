import { useState } from "react";
import { questions } from "./data/questions";
import Game from "./components/userComponents/Game";
import Result from "./components/userComponents/Result";
function App() {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const question = questions[step];
  const resultQuestion = questions.length;
  const onClickVariant = (index: number) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correctAnswers={correct} totalQuestions={resultQuestion} />
      )}
    </div>
  );
}

export default App;
