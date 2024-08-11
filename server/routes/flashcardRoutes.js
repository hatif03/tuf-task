const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, flashcardController.getFlashcards);
router.post('/', authMiddleware, flashcardController.createFlashcard);
router.put('/:id', authMiddleware, flashcardController.updateFlashcard);
router.delete('/:id', authMiddleware, flashcardController.deleteFlashcard);

module.exports = router;
