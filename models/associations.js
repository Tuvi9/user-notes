const User = require('./user');
const Notes = require('./notes');

// Define associations
Notes.belongsTo(User, { foreignKey: 'id', as: 'user' });