"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeById = exports.updateEmployeeById = exports.getEmployeeById = exports.getAllEmployees = exports.addEmployee = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// adding a employee
const addEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        yield prisma.employee.create({
            data: {
                name: body.name,
                email: body.email,
                position: body.position
            }
        });
        return res.status(200).json({
            success: true,
            message: 'data sent successfully'
        });
    }
    catch (e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        });
    }
});
exports.addEmployee = addEmployee;
// get all employees
const getAllEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const data = yield prisma.employee.findMany({});
        return res.status(200).json({
            success: true,
            data
        });
    }
    catch (e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        });
    }
});
exports.getAllEmployees = getAllEmployees;
// get employee details by id 
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const data = yield prisma.employee.findFirst({
            where: {
                id: +id
            }
        });
        return res.status(200).json({
            success: true,
            data
        });
    }
    catch (e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        });
    }
});
exports.getEmployeeById = getEmployeeById;
// update employee details by id
const updateEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    try {
        const updatedData = yield prisma.employee.update({
            where: {
                id: +id
            },
            data: {
                name: data.name,
                position: data.position,
                email: data.email
            }
        });
        return res.status(200).json({
            success: true,
            data
        });
    }
    catch (e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        });
    }
});
exports.updateEmployeeById = updateEmployeeById;
// delete employee by id
const deleteEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const deletedData = yield prisma.employee.delete({
            where: {
                id: +id
            },
        });
        return res.status(200).json({
            success: true,
            data: deletedData
        });
    }
    catch (e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        });
    }
});
exports.deleteEmployeeById = deleteEmployeeById;
