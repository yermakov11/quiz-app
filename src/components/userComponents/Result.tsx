import { useNavigate } from "react-router-dom";
interface ResultProps {
  correctAnswers: number;
  totalQuestions: number;
}

export default function Result({ correctAnswers, totalQuestions }: ResultProps) {
  const navigate = useNavigate();
  const handleTryAgain = () => {
    navigate("/quiz-app/"),{ replace: true };
    window.location.reload();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center p-4 max-w-xl w-full mx-auto bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          You guessed {correctAnswers} out of {totalQuestions} answers
        </h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleTryAgain}>
            try again
          </button>
      </div>
    </div>
  );
};


