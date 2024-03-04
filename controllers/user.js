const bcrypt = require('bcrypt');
const User = require('../models/user');

const register = (req, res) => {
    console.log(req.body);
    //! Crypting the password
    bcrypt.hash(req.body.password, 10, (error, cryptPassword) => {
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
    })
}

module.exports = {
    register
};