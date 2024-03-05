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
        //! If username or email already exists give an error
        User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then((user) => {
            if(user) {
                res.json({
                    message: "Username already exists"
                })
            } else {
                User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: cryptPassword
                })
                //! If the user is created successfully open a session
                .then((registered) => {
                    req.session.user = {
                        username: registered.username,
                        user_id: registered.id,
                    };
                    console.log(req.session)
                    //! Send a response to the client
                    res.json({
                        message: "New user registered successfully",
                        user: registered,
                        user_session: req.session.user
                    })
                })
            }
    })
})}}

module.exports = {
    register
};