const routes = require("express").Router()
const advertisementController = require("../controllers/AdvertisementController")

routes.post("/add",advertisementController.addAdvertisment)
routes.get("/getall",advertisementController.getAllAdvertisments)
routes.get("/getallbyuserId/:userId",advertisementController.getAllAdvertismentsbyuserId)

module.exports = routes