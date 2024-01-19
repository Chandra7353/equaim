const express=require("express")
const { register, LoginUser } = require("../Controller/signup.controller")

let routes = express.Router()

routes.post("/signup", register)
routes.post("/login", LoginUser)


module.exports = routes