const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const checkRole = require('../middleware/authMiddleware');

// Public Routes
router.get('/', bookController.getAllBooks);       // GET /api/books
router.get('/:id', bookController.getBookById);    // GET /api/books/:id

// Admin Routes (Perlu checkRole('admin'))
router.post('/', checkRole('admin'), bookController.createBook);      // POST /api/books
router.put('/:id', checkRole('admin'), bookController.updateBook);    // PUT /api/books/:id
router.delete('/:id', checkRole('admin'), bookController.deleteBook); // DELETE /api/books/:id

module.exports = router;