const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
    }
);

// Test the connection
sequelize.authenticate()
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Database connection error:', err));

module.exports = { sequelize, DataTypes };