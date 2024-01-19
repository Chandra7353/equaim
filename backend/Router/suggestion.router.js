const express = require("express")
const { addfeedback, editfeedback, deletefeedback, getAllfeedback } = require("../Controller/suggestion")
const {auth} =require("../Middleware/auth.middleware")

let routes = express.Router()


routes.post ("/feedback", auth,addfeedback)
routes.put("/edit/:id", auth,editfeedback)
routes.delete("/delete/:id", auth, deletefeedback)
routes.get("/getall", auth, getAllfeedback)


module.exports= routes