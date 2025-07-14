const express = require('express');
const router = express.Router();
const { createNote, getAllNotes } = require('../controller/notes.controller');

// @route /api/v1/notes
router.get('/', getAllNotes);
router.post('/', createNote);


module.exports = router;