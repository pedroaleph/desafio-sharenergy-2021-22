import { Request, Response } from 'express';
const { authenticate } = require('../services/AuthService');

exports.authenticate = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const data = await authenticate(email, password);
        res.send(data);        
    } catch (error:any) {
        res.status(401).send({ message: error.message });
    }
}

