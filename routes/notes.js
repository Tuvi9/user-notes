const express = require('express')
const router = express.Router()
const { createNote, getAllnotes } = require('../controllers/notes')

//! Post the data from the form
router.post('/create', createNote)

router.get('/all', getAllnotes)

//! Views
router.get('/create', (req, res) => {
    res.render('notesForm')
})

module.exports = router