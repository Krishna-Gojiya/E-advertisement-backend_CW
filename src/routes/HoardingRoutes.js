const routes = require("express").Router()
const hoardingController = require("../controllers/HoardingController")

routes.post("/add",hoardingController.addHoarding)
routes.post("/addwithfile",hoardingController.addHoardingwithFile)
routes.get("/getall",hoardingController.getAllHoardings)
routes.get("/getallbyuserId/:userId",hoardingController.getAllHoardingsbyuserId)
routes.get("/getallbyId/:id",hoardingController.getHoardingbyId)

module.exports = routes