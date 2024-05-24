import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { questions as initialQuestions } from "./data/questions";
import Game from "./components/userComponents/Game";
import EditQuiz from "./components/adminComponents/EditQuiz";
import Result from "./components/userComponents/Result";
import Header from "./components/Header";

function App() {
  const [questions, setQuestions] = useState(initialQuestions);
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              step !== questions.length ? (
                <Game question={question} onClickVariant={onClickVariant} />
              ) : (
                <Result
                  correctAnswers={correct}
                  totalQuestions={resultQuestion}
                />
              )
            }
          />
          <Route path="/admin" element={<EditQuiz questions={questions} setQuestions={setQuestions} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
