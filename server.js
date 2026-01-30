const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Import Routes yang baru dibuat
const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

const app = express();
app.use(bodyParser.json());

// --- GUNAKAN ROUTES ---
// Artinya: semua yg berawalan /api/books akan diurus oleh bookRoutes
app.use('/api/books', bookRoutes);

// Artinya: semua yg berawalan /api/borrow akan diurus oleh borrowRoutes
app.use('/api/borrow', borrowRoutes);

// Route Default
app.get('/', (req, res) => {
    res.send('Server Remedial Berjalan dengan Arsitektur MVC!');
});

// Sinkronisasi Database & Jalankan Server
sequelize.sync()
    .then(() => {
        console.log('Database terhubung & Tabel disinkronisasi.');
        app.listen(3000, () => {
            console.log('Server berjalan di http://localhost:3000');
        });
    })
    .catch(err => console.log('Gagal koneksi database:', err));