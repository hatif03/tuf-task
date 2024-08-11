const Flashcard = require('../models/flashcardModel');

exports.getFlashcards = (req, res) => {
  Flashcard.getAllFlashcards((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createFlashcard = (req, res) => {
  const { question, answer } = req.body;
  Flashcard.createFlashcard(question, answer, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Flashcard created' });
  });
};

exports.updateFlashcard = (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  Flashcard.updateFlashcard(id, question, answer, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Flashcard updated' });
  });
};

exports.deleteFlashcard = (req, res) => {
  const { id } = req.params;
  Flashcard.deleteFlashcard(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Flashcard deleted' });
  });
};
