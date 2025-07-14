const express = require('express');
const router = express.Router();
const { uploadFileToS3 } = require('../controller/upload.controller');

router.post('/', uploadFileToS3);

module.exports = router;