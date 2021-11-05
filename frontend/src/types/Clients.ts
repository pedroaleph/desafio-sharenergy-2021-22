export type ClientsResponse = {
    content: ClientsData,
    size: number,
    page: number,
    totalPages: number,
    totalElements: number
}

export type ClientsData = ClientData[];

export type ClientData = {
    _id?: number,
    numeroCliente: number,
    emailCliente?: string,
    nomeCliente: string,
    usinas: ParticipationInPlant[],
    //createdAt: string,
    //updatedAt: string
}

export type ParticipationInPlant =  {
    usinaId: number,
    percentualDeParticipacao: number
}