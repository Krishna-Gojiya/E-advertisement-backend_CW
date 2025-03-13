const areaModel = require("../models/AreaModel")

//addarea
//getallareas
//getallareasbycityId

const addArea = async(req,res)=>{
    try{
        const createarea = await areaModel.create(req.body)
        res.status(201).json({
            message:"Area added sucessfully...",
            data: createarea
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllAreas = async(req,res)=>{
    try{
        const showareas = await areaModel.find().populate("cityId").populate("stateId")
        res.status(200).json({
            message: "All areas fetched...",
            data: showareas
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllAreasbycityId = async(req,res)=>{
    try{
        const showareasbycityId = await areaModel.find({cityId: req.params.cityId}).populate("cityId").populate("stateId")
        res.status(200).json({
            message:"All Areas according cityId fetched...",
            data: showareasbycityId
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    addArea,
    getAllAreas,
    getAllAreasbycityId
}