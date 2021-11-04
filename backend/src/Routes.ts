import { Router } from "express";

const {
    findAllClients,
    findClientById, 
    createClient, 
    updateClient, 
    deleteClient 
} = require('./controllers/ClientController');

const Routes = Router();

// Routes.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

Routes.get('/', (req, res) => {
    try {
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false });
    }
});

// clients
Routes.get('/clients', findAllClients);
Routes.get('/clients/:id', findClientById);
Routes.post('/clients', createClient);
Routes.put('/clients/:id', updateClient);
Routes.delete('/clients/:id', deleteClient);

export default Routes;