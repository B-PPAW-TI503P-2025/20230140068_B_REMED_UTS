const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library_remedial_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // Mematikan log query sql agar terminal bersih
});

module.exports = sequelize;