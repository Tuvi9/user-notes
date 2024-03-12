const express = require('express')
const router = express.Router()
const { createNote } = require('../controllers/notes')

//! Post the data from the form
router.post('/create', createNote)

//! Views
router.get('/create', (req, res) => {
    res.render('notesForm')
})

module.exports = router