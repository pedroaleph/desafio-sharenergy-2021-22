export type ClientsData = ClientData[]

export type ClientData = {
    numeroCliente: number,
    nomeCliente: string,
    usinas: ParticipationInPlant[]
}

export type ParticipationInPlant =  {
    usinaId: number,
    percentualDeParticipacao: number
}