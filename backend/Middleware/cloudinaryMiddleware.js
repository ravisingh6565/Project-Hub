const dotenv = require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});


const uploadImageToCloudinary = async (req, res, next) => {
    try {
        const data =req.body
        console.log("it is your img path ::",data.image)
        if (!req.body.image) {
            return res.status(400).json({
                success: false,
                message: 'No image provided'
            });
        }

        const imagePath = data.image;

        const result = await cloudinary.uploader.upload(imagePath, {
            folder: 'projectHub_images'
        });


        req.body.image = result.secure_url;
        next();
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: 'Image upload failed',
            error: error.message
        });
    }
};

module.exports = uploadImageToCloudinary;
