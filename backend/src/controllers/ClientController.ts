import { Request, Response } from 'express';
const { 
    findAll, 
    findById, 
    create, 
    update, 
    deleteOne
 } = require('../services/ClientService');

exports.findAllClients = async (req: Request, res: Response) => {
    try {
        const data = await findAll();

        res.send(data);        
    } catch (error:any) {
        res.status(400).send({ message: error.message });
    }
}

exports.findClientById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const data = await findById(id);

        res.send(data);        
    } catch (error:any) {
        res.status(400).send({ message: error.message });
    }
}

exports.createClient = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        const data = await create(body);

        res.status(201).send(data);        
    } catch (error:any) {
        res.status(400).send({ message: error.message });
    }
}

exports.updateClient = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const data = await update(id, body);

        res.status(202).send(data);        
    } catch (error:any) {
        res.status(400).send({ message: error.message });
    }
}

exports.deleteClient = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        await deleteOne(id);

        res.status(204).send();        
    } catch (error:any) {
        res.status(400).send({ message: error.message });
    }
}