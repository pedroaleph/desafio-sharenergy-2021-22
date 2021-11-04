import { Request, Response } from 'express';
import { findAll ,createOneUser } from '../services/UserService';

export const findAllUsers = async (req: Request, res: Response) => {

    try {
        const data = await findAll();
        res.send(data);        
    } catch (error:any) {
        res.status(400).send({ success: false, message: error.message });
    }
}

export const createUser = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        const data = await createOneUser(body);

        res.status(201).send(data);        
    } catch (error:any) {
        res.status(400).send({ success: false, message: error.message });
    }
}