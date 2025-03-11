const routes = require("express").Router()
const cityController = require("../controllers/CityController")

routes.post("/add",cityController.addCity)
routes.get("/getall",cityController.getAllCities)
routes.get("/getallbystateId/:stateId",cityController.getAllCitiesbyStateId)

module.exports = routes