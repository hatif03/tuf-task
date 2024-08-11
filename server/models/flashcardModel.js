const db = require('../config/db');

const createFlashcard = (question, answer, callback) => {
  db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], callback);
};

const getAllFlashcards = (callback) => {
  db.query('SELECT * FROM flashcards', callback);
};

const updateFlashcard = (id, question, answer, callback) => {
  db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], callback);
};

const deleteFlashcard = (id, callback) => {
  db.query('DELETE FROM flashcards WHERE id = ?', [id], callback);
};

module.exports = { createFlashcard, getAllFlashcards, updateFlashcard, deleteFlashcard };
