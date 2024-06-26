import React, { useState } from "react";

interface Question {
  title: string;
  variants: string[];
  correct: number;
}

interface QuestionProps {
  question: Question;
  onClickVariant: (index: number) => void;
}

export default function Game({ question, onClickVariant }: QuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [next, setNext] = useState<number>(1);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    console.log(event)
    setSelectedIndex(index);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedIndex !== null) {
      onClickVariant(selectedIndex);
      const nextStep = next + 1;
      setNext(nextStep);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-4 max-w-xl w-full mx-auto bg-white rounded shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Question {next} 
        </h3>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {question.title}
        </h2>
        <div className="flex flex-col items-center">
          {question.variants.map((variant, index) => (
            <label key={index} className="flex items-center mb-2">
              <input
                type="radio"
                name="answer"
                value={index}
                onChange={(event) => handleRadioChange(event, index)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">{variant}</span>
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-gray-500"
        >
          Next
        </button> 
      </form>
    </div>
  );
}
