//database
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model("roles",roleSchema)
//table created roles[roleSchema]