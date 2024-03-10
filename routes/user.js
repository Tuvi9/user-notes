const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userRegister'); 

//! Different routes
router.post('/register', register);

//! Different views
router.get('/', (req, res) => {
    res.render('index');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;
