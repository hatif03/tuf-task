import React from 'react';
import Flashcard from './Flashcard';

const FlashcardContainer = ({ flashcards, deleteFlashcard, updateFlashcard }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          question={flashcard.question}
          answer={flashcard.answer}
          onDelete={() => deleteFlashcard(flashcard.id)}
          onUpdate={() => updateFlashcard(flashcard.id)}
        />
      ))}
    </div>
  );
};

export default FlashcardContainer;
