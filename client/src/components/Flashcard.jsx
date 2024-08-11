import React from 'react';

const Flashcard = ({ question, answer, onDelete, onUpdate }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-700 mb-4">{answer}</p>
      <button
        onClick={onUpdate}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Update
      </button>
      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Flashcard;
