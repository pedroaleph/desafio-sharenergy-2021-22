import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ?? 'XXX';

const isTokenExists = (token: string | undefined) => {
    if(!token)
        throw new Error('No access token provided!');
    return true;
}

const isTokenValid = (token: string) => {
    try {
        jwt.verify(token, JWT_SECRET);
        return true;
    } catch (error) {
        throw new Error('Invalid access token!');
    }
}



export const auth = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers['authorization'];

    try {
        isTokenExists(authorization);

        isTokenValid(String(authorization));

        next();
    } catch (error:any) {
        res.status(401).send({ auth: false, message: error.message });

    }
}