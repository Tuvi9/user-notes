const User = require('./user');
const Notes = require('./notes');

// Define associations
User.hasMany(Notes, { foreignKey: 'noteId', as: 'notes' });
Notes.belongsTo(User, { foreignKey: 'id', as: 'user' });