import { Router } from "express";

const {
    findPagedClients,
    findClientById, 
    createClient, 
    updateClient, 
    deleteClient 
} = require('./controllers/ClientController');

const { findAllUsers, createUser } = require('./controllers/UserController');

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
Routes.get('/clients/:id', findClientById);
Routes.post('/clients', createClient);
Routes.put('/clients/:id', updateClient);
Routes.delete('/clients/:id', deleteClient);

// users
Routes.get('/users', findAllUsers);
Routes.post('/users', createUser);

export default Routes;