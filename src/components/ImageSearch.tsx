import React, { useState } from 'react';

interface IProps {
  searchText: (text: string) => void;
}
export default function ImageSearch({ searchText }: IProps) {
  const [text, setText] = useState('');

  //   const;
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10  mx-auto">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:text-teal-900"
            type="text"
            value={text}
            placeholder="Search Image Term..."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white px-2 py-1 rounded"
            type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
