import express from 'express';
import { addEmployee, deleteEmployeeById, getAllEmployees, getEmployeeById, updateEmployeeById } from '../controller/employeeController';
import { checkEmail } from '../middleware';
const employeeRouter = express.Router();

// add a employee
employeeRouter.post('/employee',checkEmail, addEmployee)

// get all employees
employeeRouter.get('/employees', getAllEmployees)

// get employee details by id 
employeeRouter.get('/employee/:id', getEmployeeById)

// update employee details by id
employeeRouter.put('/employee/:id', updateEmployeeById)

// delete employee by id
employeeRouter.delete('/employee/:id', deleteEmployeeById)

export default employeeRouter;