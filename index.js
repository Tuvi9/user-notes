const express = require('express');
const sequelize = require('./utils/db');
const session = require('express-session')
const app = express();

const User = require('./models/user');
User.sync();

app.use(session({
    secret: "my-secret",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24}, // 24 hours
    resave: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000...')
});