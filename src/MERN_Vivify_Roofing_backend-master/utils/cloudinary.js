const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// middleware file buffer to upload photo files
const uploadFile = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream({ resource_type: 'raw' },
      (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      }
    ).end(fileBuffer);
  })
}

module.exports = {uploadFile}
