const mongoose =require("mongoose")

require ("dotenv").config()

mongoose.connect(process.env.DEV_URL).then(()=>{
    console.log("mongodb running sucessfully");
}).catch((err)=>{
    throw new Error(err)
})