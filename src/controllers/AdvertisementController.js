const advertisementModel = require("../models/AdvertisementModel")

//add
//getall
//getallbyuserId

const addAdvertisment = async(req,res)=>{
    try{
        const createadvertisment = await advertisementModel.create(req.body)
        res.status(201).json({
            message:"Advertisement added successfully...",
            data: createadvertisment
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllAdvertisments = async(req,res)=>{
    try{
        const showadvertisments = await advertisementModel.find().populate("stateId").populate("cityId").populate("areaId").populate("userId")
        if(showadvertisments.length === 0){
            res.status(404).json({
                message: "No Advertisments found"
            })
        }
        else{
            res.status(200).json({
                message: "All Advertisments fetched...",
                data: showadvertisments
            })
        }
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllAdvertismentsbyuserId = async(req,res)=>{
    try{
        const showadvertismentsbyuserId = await advertisementModel.find({userId: req.params.userId}).populate("stateId cityId areaId userId")
        if(showadvertismentsbyuserId.length === 0){
            res.status(404).json({
                message: "No Advertisments found"
            })
        }
        else{
            res.status(200).json({
                message: "All Advertisments according userId fetched...",
                data: showadvertismentsbyuserId
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
    addAdvertisment,
    getAllAdvertisments,
    getAllAdvertismentsbyuserId
}