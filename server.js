const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Employee = require("./models/Employee");
dotenv.config();

app.use(express.json());    
app.use(express.static("public"));


mongoose.connect(process.env.MONGO_URI).then( () => {
    console.log("mongodb connected succesfully");
}).catch( (e) => {
    console.log("error");
});

app.post("/employee", async (req,res) => {
    const employee = await Employee.create({
        empID: Number(req.body.empID),
        empName: req.body.empName,
        empSalary: Number(req.body.empSalary),
        empPosition: req.body.empPosition
    });

    res.json("added successfully");
});

app.get("/employee",async (req,res) => {
    const employee = await Employee.find();
    res.json(employee);
});

app.get("/employee/:id", async (req,res) => {
    const employee = await Employee.findOne({
        empID:Number(req.params.id)
    });

    res.json(employee);
});

app.delete("/employee", async (req,res) => {
    await Employee.deleteMany({});
    res.json("all data deleted");
});

app.delete("/employee/:id",  async (req,res) => {
    const employee = await Employee.findOneAndDelete({
        empID:Number(req.params.id)
    });
    res.json("a Employee deleted", employee);
});

app.patch("/employee/:id", async (req,res) => {
    const emp = await Employee.findOne({ empID : req.params.id});
    if(req.body.empName){
        emp.empName = req.body.empName;
    }

    if(req.body.empSalary){
        emp.empSalary = req.body.empSalary;
    }

    if(req.body.empPosition){
        emp.empPosition = req.body.empPosition;
    }

    await emp.save();
    res.json("details updated");
});


app.listen("2002", () => {
    console.log("server is running on 2002");
});