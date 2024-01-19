
const mongoose =require("mongoose")
const bcrypt = require("bcryptjs")

let Signup = new mongoose.Schema({

email:{
    type:String,
    unique: true
},
name:{
   type:String
},
password:{
    type:String
}

},
{ timestamps: true }
)


//& password bcrypt
Signup.pre("save", async function (next) {

    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

    

})

//& compare bcrypt password

Signup.methods.compareMypassword = async function (password) {

    let comparepass = await bcrypt.compare(password, this.password)

    return comparepass
}

module.exports = new mongoose.model("sign", Signup)
