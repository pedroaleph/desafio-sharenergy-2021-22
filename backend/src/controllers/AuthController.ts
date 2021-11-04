import { Request, Response } from 'express';
import { authenticate } from '../services/AuthService';

export const authenticateUser = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const data = await authenticate(email, password);
        res.send({ auth: true, ...data });        
    } catch (error:any) {
        res.status(401).send({ auth: false ,message: error.message });
    }
}

