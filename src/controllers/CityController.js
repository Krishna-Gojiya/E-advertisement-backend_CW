const cityModel = require("../models/CityModel")

//addcity
//getallcities
//getcitiesbystateid

const addCity = async(req,res)=>{
    try{
        const createcity = await cityModel.create(req.body)
        res.status(201).json({
            message: "City sucessfully added...",
            data: createcity
        })
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

const getAllCities = async(req,res)=>{
    try{
        const showcities = await cityModel.find().populate("stateId")
        res.status(200).json({
            message: "All cities fetched...",
            data: showcities
        })
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

const getAllCitiesbyStateId = async(req,res)=>{
    try{
        const showcitiesbystateId = await cityModel.find({stateId: req.params.stateId}).populate("stateId")//can't use findbyid here stateId is filed where as byid use index id of city table
        res.status(200).json({
            message: "All cities are fetched according StateId",
            data: showcitiesbystateId
        })
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

module.exports = {
    addCity,
    getAllCities,
    getAllCitiesbyStateId
}