const stateModel = require("../models/StateModel")

//addstate
//getallstates

const addState = async(req,res)=>{
    try{
        const createstate = await stateModel.create(req.body)
        res.status(201).json({
            message: "State Successfully Added...",
            data: createstate
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllStates = async(req,res) =>{
    try{
        const showstates = await stateModel.find()
        res.status(200).json({
            message: "All State Fetched...",
            data: showstates
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    addState,
    getAllStates
}