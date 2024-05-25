import React, { useState, useEffect } from "react";
import { getItem, setItem } from "../../utils/localStorage";
import Search from "../Search";

interface Question {
  title: string;
  variants: string[];
  correct: number;
}

interface EditQuizProps {
  question: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

export default function EditQuiz({ question, setQuestions }: EditQuizProps) {
  const [newQuestion, setNewQuestion] = useState<Question>({
    title: "",
    variants: [""],
    correct: 0,
  });

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const storedQuestions = getItem("quizQuestions");
    if (storedQuestions) {
      setQuestions(storedQuestions);
    }
  }, []);

  useEffect(() => {
    setItem("quizQuestions", question);
  }, [question]);

  const addQuestion = () => {
    setQuestions([...question, newQuestion]);
    setNewQuestion({ title: "", variants: [""], correct: 0 });
  };

  const removeQuestion = (index: number) => {
    setQuestions(question.filter((_, i) => i !== index));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index?: number, variantIndex?: number) => {
    const { name, value } = event.target;
    if (index !== undefined && variantIndex === undefined) {
      const updatedQuestions = [...question];
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        [name]: value,
      };
      setQuestions(updatedQuestions);
    } else if (variantIndex !== undefined && index !== undefined) {
      const updatedQuestions = [...question];
      updatedQuestions[index].variants[variantIndex] = value;
      setQuestions(updatedQuestions);
    } else {
      if (name === "title" || name === "correct") {
        setNewQuestion({ ...newQuestion, [name]: value });
      } else if (variantIndex !== undefined) {
        const updatedVariants = [...newQuestion.variants];
        updatedVariants[variantIndex] = value;
        setNewQuestion({ ...newQuestion, variants: updatedVariants });
      }
    }
  };

  const addVariant = (index?: number) => {
    if (index !== undefined) {
      const updatedQuestions = [...question];
      updatedQuestions[index].variants.push("");
      setQuestions(updatedQuestions);
    } else {
      setNewQuestion({
        ...newQuestion,
        variants: [...newQuestion.variants, ""],
      });
    }
  };

  const removeVariant = (index: number, variantIndex: number) => {
    const updatedQuestions = [...question];
    updatedQuestions[index].variants = updatedQuestions[index].variants.filter(
      (_, i) => i !== variantIndex
    );
    setQuestions(updatedQuestions);
  };

  const filteredQuestions = question.filter(ques =>
    ques.title.toLowerCase().includes(searchText.toLowerCase()) ||
    ques.variants.some(variant => variant.toLowerCase().includes(searchText.toLowerCase()))
  );

  return (
    <div className="flex flex-col items-center p-4 max-w-2xl w-full mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Questions</h2>
      <Search searchText={searchText} setSearchText={setSearchText} />
      {filteredQuestions.map((q, index) => (
        <div key={index} className="w-full mb-4 p-4 bg-gray-100 rounded">
          <input
            type="text"
            name="title"
            value={q.title}
            onChange={(e) => handleInputChange(e, index)}
            className="w-full p-2 mb-2 border rounded"
            placeholder="Question Title"
          />
          {q.variants.map((variant, variantIndex) => (
            <div key={variantIndex} className="flex mb-2">
              <input
                type="text"
                value={variant}
                onChange={(e) => handleInputChange(e, index, variantIndex)}
                className="w-full p-2 border rounded mr-2"
                placeholder="Answer Variant"
              />
              <button
                type="button"
                onClick={() => removeVariant(index, variantIndex)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addVariant(index)}
            className="mb-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Variant
          </button>
          <div className="flex mb-2">
            <select
              name="correct"
              value={q.correct}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border rounded"
            >
              {q.variants.map((_, i) => (
                <option key={i} value={i}>
                  {i + 1}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => removeQuestion(index)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Remove Question
            </button>
          </div>
        </div>
      ))}

      <div className="w-full mb-4 p-4 bg-gray-100 rounded">
        <input
          type="text"
          name="title"
          value={newQuestion.title}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 border rounded"
          placeholder="New Question Title"
        />
        {newQuestion.variants.map((variant, index) => (
          <div key={index} className="flex mb-2">
            <input
              type="text"
              value={variant}
              onChange={(e) => handleInputChange(e, undefined, index)}
              className="w-full p-2 border rounded mr-2"
              placeholder="New Answer Variant"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addVariant()}
          className="mb-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Variant
        </button>
        <div className="flex mb-2">
          <select
            name="correct"
            value={newQuestion.correct}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            {newQuestion.variants.map((_, i) => (
              <option key={i} value={i}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={addQuestion}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Question
        </button>
      </div>
    </div>
  );
}
