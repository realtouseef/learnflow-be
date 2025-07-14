const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

app.use('/api/v1/notes', require('./routes/note.routes'));
app.use('/api/v1/upload', require('./routes/upload.routes'));


// Health Check
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
