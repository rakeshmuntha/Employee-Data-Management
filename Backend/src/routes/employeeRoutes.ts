import express from 'express';
import { PrismaClient } from '@prisma/client';
const employeeRouter = express.Router();
const prisma = new PrismaClient();

// add a employee
employeeRouter.post('/employee', async (req, res) => {
    const body = req.body;

    try {
        await prisma.employee.create({
            data:{
                name: body.name,
                email: body.email,
                position: body.position
            }
        })

        return res.status(200).json({
            success: true,
            message:'data sent successfully'
        })
    }
    catch(e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        })
    }
})

// get all employees
employeeRouter.get('/employees', async (req, res) => {
    const body = req.body;

    try {
        const data = await prisma.employee.findMany({});

        return res.status(200).json({
            success: true,
            data
        })
    }
    
    catch(e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        })
    }
})

// get employee details by id 
employeeRouter.get('/employee/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const data = await prisma.employee.findFirst({
            where:{
                id: +id
            }
        });

        return res.status(200).json({
            success: true,
            data
        })
    }
    
    catch(e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        })
    }
})

// update employee details by id
employeeRouter.put('/employee/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const updatedData = await prisma.employee.update({
            where:{
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
        })
    }
    
    catch(e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        })
    }
})


employeeRouter.delete('/employee/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const deletedData = await prisma.employee.delete({
            where:{
                id: +id
            },
        });

        return res.status(200).json({
            success: true,
            data: deletedData
        })
    }
    
    catch(e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        })
    }
})

export default employeeRouter;