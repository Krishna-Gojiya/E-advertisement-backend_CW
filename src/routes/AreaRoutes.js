const routes = require("express").Router()
const areaController = require("../controllers/AreaController")

routes.post("/add",areaController.addArea)
routes.get("/getall",areaController.getAllAreas)
routes.get("/getallbycityId/:cityId",areaController.getAllAreasbycityId)

module.exports = routes