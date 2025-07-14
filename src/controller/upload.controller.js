const s3 = require('../config/s3');

exports.uploadFileToS3 = async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const file = req.files.file;

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
      return res.status(400).json({ success: false, message: 'Invalid file type' });
    }

    const s3Params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${Date.now()}-${file.name}`,
      Body: file.data,
      ContentType: file.mimetype,
    };

    const uploadResult = await s3.upload(s3Params).promise();

    res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      data: {
        fileUrl: uploadResult.Location,
        fileType: file.mimetype,
        fileName: file.name,
        fileSize: file.size,
        key: uploadResult.Key,
      }
    });
  } catch (err) {
    console.error('S3 Upload Error:', err);
    res.status(500).json({ success: false, message: 'File upload failed', error: err.message });
  }
};