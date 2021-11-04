import mongoonse, { model, Schema } from "mongoose";

const AutoIncrement = require('mongoose-sequence')(mongoonse);

export type ClientType = {
    _id: number,
    numeroCliente: number,
    nomeCliente: string,
    emailCliente: string,
    imagemCliente?: string,
    usinas?: PowerPlant[]
}

type PowerPlant = {
    usinaId: number,
    percentualDeParticipacao: number
}

const ClientSchema = new Schema<ClientType>({
    _id: Number,
    numeroCliente: Number,
    nomeCliente: { type: String, required: true },
    emailCliente: { type: String, unique: true, required: true},
    imagemCliente: String,
    usinas: []
}, { timestamps: true });

ClientSchema.index({ numeroCliente: 1 }, { unique: true });
ClientSchema.plugin(AutoIncrement, { id: "client_id_counter", inc_field: "_id" });

module.exports = model<ClientType>('Clients', ClientSchema);


