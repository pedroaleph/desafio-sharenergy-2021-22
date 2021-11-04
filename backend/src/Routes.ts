import { Router } from "express";
import { auth } from "./Middlewares/Auth";

import {
    findPagedClients,
    findClientById, 
    createClient, 
    updateClient, 
    deleteClient 
} from './controllers/ClientController';

import { findAllUsers, createUser } from './controllers/UserController';
import { authenticateUser } from './controllers/AuthController';

const Routes = Router();

Routes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

Routes.get('/', (req, res) => {
    try {
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false });
    }
});

// clients
Routes.get('/clients', findPagedClients);
Routes.get('/clients/:id', auth, findClientById);
Routes.post('/clients', auth, createClient);
Routes.put('/clients/:id', auth, updateClient);
Routes.delete('/clients/:id', auth, deleteClient);

// users
Routes.get('/users', auth, findAllUsers);
Routes.post('/users', createUser);

// auth
Routes.post('/auth/login', authenticateUser);


export default Routes;