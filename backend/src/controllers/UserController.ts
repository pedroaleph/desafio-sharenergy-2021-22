import { Request, Response } from 'express';
const { findAll ,createOneUser } = require('../services/UserService');

exports.findAllUsers = async (req: Request, res: Response) => {

    try {
        const data = await findAll();
        res.send(data);        
    } catch (error:any) {
        res.status(400).send({ message: error.message });
    }
}

exports.createUser = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        const data = await createOneUser(body);

        res.status(201).send(data);        
    } catch (error:any) {
        res.status(400).send({ message: error.message });
    }
}