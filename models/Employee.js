const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
    empID: Number,
    empName: String,
    empSalary: Number,
    empPosition: String
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;