const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadCloudinary = async (tempUpload) => {
    try {
        const result = await cloudinary.uploader.upload(tempUpload);

        return result
    } catch (error) {
        console.log(error, 'error');
    }
}

const deleteFromCloudinary = async (id) => {
    try {
        const result = await cloudinary.uploader.destroy(id);
    
    return result
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploadCloudinary,
    deleteFromCloudinary
}