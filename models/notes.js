const Sequelize = require('sequelize');
const sequelize = require('../utils/db');


const Notes = sequelize.define('Notes', {
    noteId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

},
{
    tableName: 'notes'
});

module.exports = Notes;