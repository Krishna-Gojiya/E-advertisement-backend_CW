const hoardingModel = require("../models/HoardingModel")
const multer = require("multer")
const path = require("path")
const cloudinaryUtill = require("../utils/CloudinaryUtil")

//add
//getall
//getallbyuserid
//getbyid

//later
//addwithfile ===>> 1.in database(in binary), 2.in local storage(file upload), 3.cloudinary(or any cloud) //best option 3. cause more space than option 1 & 2
//updatebyid

/********************************************************************************************/
//Multer for file uploading

//file path and file name function
const storage = multer.diskStorage({
    // destination: "./uploads", //used for storing in local storage
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

//for uploading multer object
const upload = multer({
    storage:storage
    //file filter later maybe
}).single("image")//here image is fieldname for uploading files in postman or in frontend(use this in register i guess)

/********************************************************************************************/

const addHoarding = async(req,res)=>{
    try{
        const createhoarding = await hoardingModel.create(req.body)
        res.status(201).json({
            message: "Hoarding added sucessfully",
            data: createhoarding
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllHoardings = async(req,res)=>{
    try{
        const showhoardings = await hoardingModel.find().populate("stateId cityId areaId userId")
        if(showhoardings.length === 0){
            res.status(404).json({
                message: "No hoardings found"
            })
        }
        else{
            res.status(500).json({
                message: "All Hoardings fetched...",
                data: showhoardings
            })
        }
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

//add file in local
/*const addHoardingwithFile = async(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.status(500).json({
                message: err.message
            })
        }
        else{
            //only file upload in storage
            res.status(200).json({
                message: "File uploaded successfully",
                data: req.file
            })
        }
    })
}*/

//add file using cloudinary
const addHoardingwithFile = async(req,res)=>{
    upload(req,res,async(err)=>{
        if(err){
            res.status(500).json({
                message: err.message
            })
        }
        else{
            const cloudinaryResponse = await cloudinaryUtill.uploadFiletoCloudinary(req.file)
            /*console.log(cloudinaryResponse)
            console.log(req.body)*/

            //store in database
            req.body.mediaURL = cloudinaryResponse.secure_url
            const createhoarding = await hoardingModel.create(req.body)
            

            res.status(200).json({
                message: "Hoarding added successfully with File using Cloudinary"/*"File uploaded successfully using Cloudinary"*/,
                data: createhoarding //req.file
            })
        }
    })
}

const getAllHoardingsbyuserId = async(req,res)=>{
    try{
        const showhoardingsbyuserId = await hoardingModel.find({ userId: req.params.userId }).populate("stateId cityId areaId userId")
        if(showhoardingsbyuserId.length === 0){
            res.status(404).json({
                message: "No hordings found"
            })
        }
        else{
            res.status(200).json({
                message: "All Hording according userId fetched...",
                data: showhoardingsbyuserId
            })
        }
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getHoardingbyId = async(req,res)=>{
    try{
        const showhoardingsbyId = await hoardingModel.findById(req.params.id).populate("stateId cityId areaId userId")
        if(showhoardingsbyId.length === 0){
            res.status(404).json({
                message: "Hording not found"
            })
        }
        else{
            res.status(200).json({
                message: "Hording according index Id fetched...",
                data: showhoardingsbyId
            })
        }
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    addHoarding,
    getAllHoardings,
    addHoardingwithFile,
    getAllHoardingsbyuserId,
    getHoardingbyId
}