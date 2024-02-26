const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/user_notes');

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.log('Unable to connect to the database:', error);
}

module.exports = sequelize;