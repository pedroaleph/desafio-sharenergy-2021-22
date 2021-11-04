import { Request, Response } from 'express';
import { 
    findPaged, 
    findById, 
    create, 
    update, 
    deleteOne
 } from '../services/ClientService';

export const findPagedClients = async (req: Request, res: Response) => {
    const strName = req.query.name as string;
    const intSize = Number(req.query.size);
    const intPage = Number(req.query.page);

    try {
        const name = strName ? strName.replace(/\s+/g, ' ').trim() : '';
        const size = (isNaN(intSize)) ? 8 : intSize;
        const page =  (isNaN(intPage)) ? 0 : intPage;

        const data = await findPaged(name, size, page);

        res.send(data);        
    } catch (error:any) {
        res.status(400).send({ success: false, message: error.message });
    }
}

export const findClientById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        const data = await findById(id);

        res.send(data);        
    } catch (error:any) {
        res.status(400).send({ success: false, message: error.message });
    }
}

export const createClient = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        const data = await create(body);

        res.status(201).send(data);        
    } catch (error:any) {
        res.status(400).send({ success: false, message: error.message });
    }
}

export const updateClient = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const body = req.body;

    try {
        const data = await update(id, body);

        res.status(202).send(data);        
    } catch (error:any) {
        res.status(400).send({ success: false, message: error.message });
    }
}

export const deleteClient = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        await deleteOne(id);

        res.status(204).send();        
    } catch (error:any) {
        res.status(400).send({ success: false, message: error.message });
    }
}