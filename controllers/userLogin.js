const bcrypt = require('bcrypt');
const User = require('../models/user');

//! The login function
const login = (req, res) => {
    console.log(req.body);
    //! Find the user by their username
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    //? If the user is not found, send a response
    .then((user) => {
        if(!user) {
            res.render('logFailure')
        } else {
            //? If the user is found, compare the password
            bcrypt.compare(req.body.password, user.password, (error, result) => {
                if(result) {
                    //! If the password is correct, create a session
                    req.session.user = {
                        username: user.username,
                        user_id: user.id
                    }
                    //! Send a response
                    res.render('logSuccess')
                //? If the password is incorrect, send a response
                } else {
                    res.render('logFailure')
                }
            })
        }
    })
}

module.exports = {
    login
}