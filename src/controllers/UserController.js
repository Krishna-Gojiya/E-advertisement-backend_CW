const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt")

const getAllUsers = async(req,res)=>{
    try{
        const showusers = await userModel.find().populate("roleId")
        res.status(200).json({
            message: "Users fetched successfully...",
            data: showusers
        })
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

const signup = async(req,res) =>{
    try{
        //password encryption
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hashedPassword;
        const createuser = await userModel.create(req.body)
        res.status(201).json({
            message: "User created...",
            data: createuser
        })
    }   
    catch(err){
        res.status(500).json({
            message: err
        })
    } 
}

const login = async(req,res)=>{
    try{
        const email = req.body.email
        const password = req.body.password

        //finding user or feching user with same email
        const foundUserFromEmail = await userModel.findOne({email: email}).populate("roleId")

        console.log(foundUserFromEmail)

        if(foundUserFromEmail != null){
            //email matched
            //now password compare
            const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password)
            if(isMatch == true){
                res.status(200).json({
                    message: "Login sucess",
                    data: foundUserFromEmail
                })
            }
            else{
                res.status(404).json({
                    message: "Invalid password..."
                })
            }
        }
        else{
            res.status(404).json({
                message: "Email not found..."
            })
        }
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

const getUserbyId = async(req,res) =>{
    try{
        const showuser = await userModel.findById(req.params.userId).populate("roleId")//find by id for index id of user table
        res.status(200).json({
            message: "User fetched successfully...",
            data: showuser
        })
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

const deleteUserbyId = async(req,res) =>{
    try{
        const deleteuser = await userModel.findByIdAndDelete(req.params.userId)
        res.status(200).json({
            message: "User deleted..",
            data: deleteuser
        })
    }
    catch(err){
        res.status(500).json({
            message: err
        })
    }
}

module.exports = {
    getAllUsers,
    signup,
    login,
    getUserbyId,
    deleteUserbyId
}