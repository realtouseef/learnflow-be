const Note = require('../models/Note');

// POST /api/v1/notes
exports.createNote = async (req, res) => {
  try {
    const note = new Note(req.body);
    const savedNote = await note.save();

    res.status(201).json({
      success: true,
      message: 'Note uploaded successfully',
      data: savedNote
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to upload note',
      error: error.message
    });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ uploadDate: -1 });
    res.status(200).json({ success: true, data: notes });
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch notes' });
  }
};