const roleModel = require("../models/RoleModel")
//roleModel == roles

const getAllRoles = async (req,res) => {
    //await...
    //select * from roleModel //cannot write sql cause mongodb is nosql so use .find()
    try{
        const showroles = await roleModel.find() //[{}]
        res.json({
            message: "roles fetched successfully...",
            data:showroles
        })
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

const addRole = async (req,res) =>{
    try{
        const createrole = await roleModel.create(req.body)
        res.status(201).json({
            message : "role added successfully...",
            data : createrole,
        })
    } 
    catch(err){
        res.status(500).json({
            message: err,
        });
    }
}

const deleteRolebyId = async(req,res) =>{
    try{
        const deleterole = await roleModel.findByIdAndDelete(req.params.roleId)
        res.status(200).json({
            message: "role deleted successfully...",
            data: deleterole
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getRolebyId = async(req,res) =>{
    try{
        const showrole = await roleModel.findById(req.params.roleId)
        res.status(200).json({
            message: "role fetched successfully...",
            data: showrole
        })
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

module.exports = {
    getAllRoles,
    addRole,
    deleteRolebyId,
    getRolebyId
}