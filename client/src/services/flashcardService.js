import axios from 'axios';

const API_URL = '/api/flashcards';

// Get all flashcards
const getFlashcards = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

// Create a new flashcard
const createFlashcard = async (flashcard) => {
  const response = await axios.post(API_URL, flashcard, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

// Update an existing flashcard
const updateFlashcard = async (id, flashcard) => {
  const response = await axios.put(`${API_URL}/${id}`, flashcard, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

// Delete a flashcard
const deleteFlashcard = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export default {
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
