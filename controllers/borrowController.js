const Book = require('../models/Book');
const BorrowLog = require('../models/BorrowLog');

exports.borrowBook = async (req, res) => {
    const userId = req.headers['x-user-id']; 
    const { bookId, latitude, longitude } = req.body;

    if (!userId) return res.status(400).json({ message: 'Header x-user-id diperlukan' });

    try {
        const book = await Book.findByPk(bookId);
        
        if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
        if (book.stock < 1) return res.status(400).json({ message: 'Stok buku habis' });

        await book.decrement('stock');
        
        const log = await BorrowLog.create({
            userId, bookId, latitude, longitude
        });

        res.json({ 
            message: 'Peminjaman berhasil dicatat', 
            data: log,
            remainingStock: book.stock 
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};