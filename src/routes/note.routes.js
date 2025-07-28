const express = require('express');
const router = express.Router();
const { createNote, getAllNotes, getFilteredNotes } = require('../controller/notes.controller');

// @route /api/v1/notes
router.get('/', getAllNotes);
router.post('/', createNote);
router.get('/filter', getFilteredNotes);

module.exports = router;