const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "admnno":String,
        "rollno":String,
        "pname":String,
        "cname":String,
        "dob":String,
        "email":String,
        "password":String
    }
)

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}