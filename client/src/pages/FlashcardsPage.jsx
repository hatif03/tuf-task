import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlashcardContainer from '../components/FlashcardContainer';

const FlashcardsPage = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const { data } = await axios.get('/api/flashcards', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setFlashcards(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFlashcards();
  }, []);

  const deleteFlashcard = async (id) => {
    try {
      await axios.delete(`/api/flashcards/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const updateFlashcard = async (id) => {
    // Update logic can be implemented here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-8">Flashcards</h1>
      <FlashcardContainer
        flashcards={flashcards}
        deleteFlashcard={deleteFlashcard}
        updateFlashcard={updateFlashcard}
      />
    </div>
  );
};

export default FlashcardsPage;
