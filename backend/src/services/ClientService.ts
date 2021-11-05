import { ClientType } from "models/Client";
const ClientModel = require('../models/Client');

// const clientDTO = (client: ClientType) => (
//     {
//         _id: client._id,
//         numeroCliente: client.numeroCliente,
//         nomeCliente: client.nomeCliente,
//         emailCliente: client.emailCliente,
//         imagemCliente: client.imagemCliente,
//     }
// )

export const createMany = async (clients: ClientType[]) => {
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

export const findPaged = async (name: string, size: number, page: number) => {
    try {
        const search = { nomeCliente: { $regex: name, $options:'i' } };

        const total = (name !== '')
            ? await ClientModel.countDocuments(search)
            : await ClientModel.estimatedDocumentCount();
    
        const totalPages = Math.ceil((size === 0) ? 1 : total / size);
    
        const skip = page * size;
        
        const data = await ClientModel.find(search).sort({ _id: -1 }).limit(size).skip(skip);

        const dataPaged = {
            content: data,
            size: size,
            page: page,
            totalPages: totalPages,
            totalElements: total
        }

        return dataPaged;
    } catch (error) {
        throw error;
    }
}

export const findById = async (id: number) => {
    try {
        const data = await ClientModel.findById(id);

        if(!data)
            throw new Error('Invalid id provided!');

        return data;
    } catch (error) {
        throw error;
    }
}

export const create = async (client: ClientType) => {
    try {
        const data = await ClientModel.create(client);

        return data;
    } catch (error) {
        throw error;
    }
}

export const update = async (id: Number ,client: ClientType) => {
    try {
        const data = await ClientModel.findByIdAndUpdate(id, client, { new: true });

        if(!data)
            throw new Error('Invalid id provided!');

        return data;
    } catch (error) {
        throw error;
    }
}

export const deleteOne = async (id: Number) => {
    try {
        const client:ClientType  = await ClientModel.findById(id);

        if(!client)
            throw new Error('Invalid id provided!');

        if (client.usinas?.length !== 0)
            throw new Error("Integrity Violation!");
        
        await ClientModel.deleteOne({ _id: id });

        return true;
    } catch (error) {
        throw error;
    }
}