const routes = require("express").Router()//doubt
const roleController = require("../controllers/RoleController")

routes.get("/getall",roleController.getAllRoles)
routes.post("/add",roleController.addRole)
routes.delete("/delete/:roleId",roleController.deleteRolebyId)
routes.get("/get/:roleId",roleController.getRolebyId)

//very-imp
module.exports = routes