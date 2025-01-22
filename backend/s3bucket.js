const AWS = require('aws-sdk');
const { File } = require('buffer');

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-1',
});

/**
 * Upload a file to S3.
 * @param {string} bucketName - Name of the S3 bucket.
 * @param {string} fileName - Name of the file to upload.
 * @param {File} fileBuffer - File data as a Buffer.
 * @returns {Promise} - Resolves with the upload response.
 */
async function uploadToS3aws(bucketName, fileName, fileBuffer) {
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileBuffer,
    ContentType: 'image/png', // Adjust based on file type
  };

  return s3.upload(params).promise();
}

module.exports = { uploadToS3aws };
