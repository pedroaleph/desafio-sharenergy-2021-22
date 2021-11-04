import { Request, Response } from 'express';
const { findAll } = require('../services/ClientService');

exports.findAllClients = async (req: Request, res: Response) => {
    try {
        const data = await findAll();
        res.send(data);        
    } catch (error) {
        res.status(400).send(error);
    }
}