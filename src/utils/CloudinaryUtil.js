const cloudinary = require("cloudinary").v2

const uploadFiletoCloudinary = async(file)=>{
    cloudinary.config({
        cloud_name:"dysnqldmo",
        api_key:"934747321849639",
        api_secret:"y9hUC58vIkp_lG_EEsjjBGRGJek"
    })

    const cloudinaryResponse = await cloudinary.uploader.upload(file.path)

    return cloudinaryResponse
}

module.exports = {
    uploadFiletoCloudinary
}