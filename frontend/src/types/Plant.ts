export type PlantData = {
    content: PlantDataContent[];
}

export type PlantDataContent = {
    tempo_h: number,
    tensao_V: number,
    corrente_A: number,
    potencia_kW: number,
    temperatura_C: number
}