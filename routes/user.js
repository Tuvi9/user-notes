const express = require('express');
const router = express.Router();
const { register } = require('../controllers/userRegister'); 
const { login } = require('../controllers/userLogin');

//! Different routes
//* Register and login page
router.post('/register', register);
router.post('/login', login)

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
