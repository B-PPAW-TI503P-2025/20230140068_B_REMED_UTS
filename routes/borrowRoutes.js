const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
const checkRole = require('../middleware/authMiddleware');

// User Routes (Perlu checkRole('user'))
router.post('/', checkRole('user'), borrowController.borrowBook); // POST /api/borrow

module.exports = router;