const bcrypt = require('bcrypt');
const Notes = require('../models/notes');

const createNote = (req, res) => {
    console.log(req.body);
    //! Create a note
    Notes.create({
        title: req.body.title,
        description: req.body.description,
    })
    //? If the note is created successfully, send the note
    .then((note) => {
        req.session.note = note;
        res.send(note);
    })
    .catch((error) => {
        res.status(500).send(error);
    })
}

module.exports = {
    createNote
}