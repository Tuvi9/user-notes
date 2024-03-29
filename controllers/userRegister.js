const bcrypt = require('bcrypt');
const User = require('../models/user');

const register = (req, res) => {
    console.log(req.body);
    //! Check if the password is at least 8 characters long
    if (req.body.password.length < 8) {
        res.json({
            message: "Password must be at least 8 characters long"
        })
    } else {
    //! Crypting the password
    bcrypt.hash(req.body.password, 10, (error, cryptPassword) => {
        //! Check if the username already exists
        User.findOne({
            where: {
                username: req.body.username
            }
        })
        //? If the username already exists, send a response
        .then((user) => {
            if(user) {
                res.render('regFailure')
            //? If the username does not exist, create the user
            } else {
                User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: cryptPassword
                })
                //? If the user is created successfully open a session
                .then((registered) => {
                    req.session.user = {
                        username: registered.username,
                        user_id: registered.id,
                    };
                    console.log(req.session)
                    //! Send the client to a sucess page
                    res.render('regSuccess');
                })
            }
        })
    })
}};

module.exports = {
    register
};