const mongoose = require("mongoose");
const Schema = mongoose.Schema

const stateSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true //add created at and updated at i guess, later explore
})

module.exports = mongoose.model("states",stateSchema);