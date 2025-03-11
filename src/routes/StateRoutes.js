const routes = require("express").Router()
const stateController = require("../controllers/StateController")

routes.post("/add",stateController.addState)
routes.get("/getall",stateController.getAllStates)

module.exports = routes