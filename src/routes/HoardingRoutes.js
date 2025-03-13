const routes = require("express")
const hoardingController = require("../controllers/HordingController")

routes.post("/add",hoardingController.addHoarding)
routes.get("/getall",hoardingController.getAllHoardings)
routes.get("/getallbyuserId/:userId",hoardingController.getAllHoardingsbyuserId)
routes.get("/getallbyId/:id",hoardingController.getHoardingbyId)

module.exports = routes