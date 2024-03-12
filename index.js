//! Webpack
const hbs = require('express-handlebars');
const express = require('express');
//! Server
const session = require('express-session')
const sequelize = require('./utils/db');
const path = require('path');
const app = express();
//! Models
require('./models/user');
require('./models/notes');
require('./models/associations');

const User = require('./models/user');
const Notes = require('./models/notes');
User.sync();
Notes.sync();

app.use(session({
    secret: "my-secret",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24}, // 24 hours
    resave: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//! Handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//! Handlebars engine
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    //* Default layout
    defaultLayout: 'index',
    //* Layouts folder
    layoutsDir: __dirname + '/views/layouts',
}));

//! Routes
const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

const noteRoutes = require('./routes/notes');
app.use('/notes', noteRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000...')
});