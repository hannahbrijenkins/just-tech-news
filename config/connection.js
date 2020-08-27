// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// require's dotenv. We dont use a variable because we only need to execute when we use connection.js
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'CEramicUn1corns!873394_H7736663', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;