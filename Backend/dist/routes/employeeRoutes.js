"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeController_1 = require("../controller/employeeController");
const middleware_1 = require("../middleware");
const employeeRouter = express_1.default.Router();
// add a employee
employeeRouter.post('/employee', middleware_1.checkEmail, employeeController_1.addEmployee);
// get all employees
employeeRouter.get('/employees', employeeController_1.getAllEmployees);
// get employee details by id 
employeeRouter.get('/employee/:id', employeeController_1.getEmployeeById);
// update employee details by id
employeeRouter.put('/employee/:id', employeeController_1.updateEmployeeById);
// delete employee by id
employeeRouter.delete('/employee/:id', employeeController_1.deleteEmployeeById);
exports.default = employeeRouter;
