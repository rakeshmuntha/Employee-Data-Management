import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const checkEmail = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
        const data = await prisma.employee.findFirst({
            where: {
                email: body.email
            }
        });

        if (data) {
            return res.status(411).json({
                success: false,
                message: "Employee with this Email Already Exists"
            })
        }
        
        next();
    }

    catch (e) {
        res.status(411);
        return res.json({
            success: false,
            message: e
        })
    }
}