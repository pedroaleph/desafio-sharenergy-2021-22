import mongoonse, { model, Schema } from "mongoose";

const AutoIncrement = require('mongoose-sequence')(mongoonse);

type client = {
    numeroCliente: number,
    nomeCliente: string,
    emailCliente?: string,
    imagemCliente?: string,
    usinas?: powerPlant[]
}

type powerPlant = {
    usinaId: number,
    percentualDeParticipacao: number
}

const ClientSchema = new Schema<client>({
    numeroCliente: Number,
    nomeCliente: { type: String, required: true },
    emailCliente: String,
    imagemCliente: String,
    usinas: [
        {
            usinaId: Number,
            percentualDeParticipacao: Number
        }
    ]
}, { _id: false, timestamps: true });

ClientSchema.plugin(AutoIncrement, { id: "client_id_counter", inc_field: "numeroCliente" });

const ClientModel = model<client>('Clients', ClientSchema);

export default ClientModel;
