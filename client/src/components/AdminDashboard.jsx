import React, { useState } from 'react';

const AdminDashboard = ({ addFlashcard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addFlashcard({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h2 className="text-2xl mb-4">Add New Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Question"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Answer"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Flashcard
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
