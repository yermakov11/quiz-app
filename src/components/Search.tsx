import React from "react";

interface SearchProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchText, setSearchText }: SearchProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search quizzes"
        className="w-full p-2 mb-4 border border-gray-300 rounded shadow-sm text-lg focus:outline-none"
      />
    </div>
  );
}
