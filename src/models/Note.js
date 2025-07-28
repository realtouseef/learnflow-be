const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Note title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Note description is required']
  },
  fileUrl: {
    type: String,
    required: [true, 'File URL is required']
  },
  fileName: {
    type: String,
    required: [true, 'File name is required']
  },
  fileType: {
    type: String,
    required: [true, 'File type is required']
  },
  fileSize: {
    type: Number,
    required: [true, 'File size is required']
  },
  previewUrl: {
    type: String
  },
  subject: {
    type: mongoose.Schema.Types.String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Subject',
    required: [true, 'Subject is required']
  },
  department: {
    type: mongoose.Schema.Types.String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Department',
    required: [true, 'Department is required']
  },
  author: {
    type: mongoose.Schema.Types.String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User',
    required: [true, 'Author is required']
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  semester:{
    type: String,
    required: [true, 'Semester is required']
  },
  tier: {
    type: String,
    enum: ['free', 'premium', 'elite'],
    default: 'free'
  },
  downloads: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Note', NoteSchema);