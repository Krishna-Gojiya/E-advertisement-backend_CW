const hoardingModel = require("../models/HordingModel")

//add
//getall
//getallbyuserid
//getbyid

//later
//addwithfile
//updatebyid

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
        const showhoardingsbyId = await hoardingModel.findById(req.params.id)
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
    getAllHoardingsbyuserId,
    getHoardingbyId
}