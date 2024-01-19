const mongoose =require("mongoose")


let Feedback = new mongoose.Schema({
  
    title:{
        type:String

    },
    category:{
        type:String
    },
    details:{
        type:String
    },
    userid:{
        type:String,
        required:true
    }
    

},
{ timestamps: true }
)

module.exports = new mongoose.model("feed", Feedback)

