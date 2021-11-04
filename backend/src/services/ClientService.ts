import { ClientType } from "models/clients";
const ClientModel = require('../models/clients');

// const clientDTO = (client: ClientType) => (
//     {
//         numeroCliente: client.numeroCliente,
//         nomeCliente: client.nomeCliente,
//         emailCliente: client.emailCliente,
//         imagemCliente: client.imagemCliente,
//         usinas: client.usinas
//     }
// )

exports.createMany = async (clients: ClientType[]) => {
    try {        
        const data = await clients.reduce((prom, client) => (
                prom.then(async result => {
                    const newClient = await ClientModel.create(client);
                    return result.concat(newClient);
                })
            ), Promise.resolve([]));
        
        return data;
    } catch (error) {
        throw error;
    }
};

exports.findAll = async () => {
    try {
        const data = await ClientModel.find();

        return data;
    } catch (error) {
        throw error;
    }
}

exports.findById = async (id: number) => {
    try {
        const data = await ClientModel.findById(id);

        return data;
    } catch (error) {
        throw error;
    }
}

exports.create = async (client: ClientType) => {
    try {
        client.numeroCliente = client._id;
        const data = await ClientModel.create(client);

        return data;
    } catch (error) {
        throw error;
    }
}

exports.update = async (id: Number ,client: ClientType) => {
    try {
        const data = await ClientModel.findByIdAndUpdate(id, client, { new: true });

        return data;
    } catch (error) {
        throw error;
    }
}

exports.deleteOne = async (id: Number) => {
    try {
        const client:ClientType  = await ClientModel.findById(id);

        if (client.usinas)
            throw new Error("Integrity Violation!");

        await ClientModel.deleteOne({ _id: id });

        return true;
    } catch (error) {
        throw error;
    }
}