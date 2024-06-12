const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const student = require("./models/student")
const {studentmodel} = require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://alvinkonukudy8:Alvin7736@cluster0.s7czq8v.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res) => {
    let input = req.body
    let student = new studentmodel(input)
    student.save()
    res.json({"status":"Success"})
})

app.get("/view",(req,res)=>{
    studentmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        
        }
    ).finally()
})

app.post("/search",(req,res) => {
    let input = req.body
    studentmodel.find(input).then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    ).finally()
})

app.post("/delete",(req,res) => {
    let input = req.body
    studentmodel.findByIdAndDelete(input._id).then(
        (response) => {
            res.json({"status":"Success"})
        }
    ).catch(
        (error) => {
            res.json({"status":"Failed"})
        }
    ).finally()
    
})

app.listen(8080,() => {
    console.log("Server Started")
})

