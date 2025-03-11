const express = require("express")//express...
const mongoose = require("mongoose")
const cros = require("cors")

//express object
const app = express()

//always forget //meaning of line: accepting data in json format for post req //still check 
app.use(express.json());

app.use(cros()) //for allowing post for signup or for accessing backend "http://localhost:3000"

const roleRoutes = require("./src/routes/RoleRoutes")
app.use("/role",roleRoutes)

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const stateRoutes = require("./src/routes/StateRoutes")
app.use("/state",stateRoutes)

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/city",cityRoutes)

const areaRoutes = require("./src/routes/AreaRoutes")
app.use("/area",areaRoutes)

const advertisementRoutes = require("./src/routes/AdvertisementRoutes")
app.use("/advertisement",advertisementRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/25_node_internship").then(()=>{
    console.log("database connected....")
})

//server creation...
const Port = 3000; 
app.listen(Port,()=>{
    console.log("Server started on Port no. ....",Port)
})