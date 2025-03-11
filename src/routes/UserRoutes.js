const routes = require("express").Router()
const userController = require("../controllers/UserController")

routes.get("/getall",userController.getAllUsers)
routes.post("/signup",userController.signup)
routes.post("/login",userController.login)
routes.get("/get/:userId",userController.getUserbyId)
routes.delete("/delete/:userId",userController.deleteUserbyId)

module.exports = routes