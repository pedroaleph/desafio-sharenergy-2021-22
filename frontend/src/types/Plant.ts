export type PlantData = PlantDataContent[];

export type PlantDataContent = {
    tempo_h: number,
    tensao_V: number,
    corrente_A: number,
    potencia_kW: number,
    temperatura_C: number
}

export type PlantVariablesType = {
    id: number
    name: string
    tag: string
    meansure: string
    unit: string
} 

export const PlantVariables = [
    {
        id: 1,
        name: 'Tensão',
        tag: 'tensao_V',
        meansure: 'volts',
        unit :'V'
    },
    {
        id: 2,
        name: 'Corrente',
        tag: 'corrente_A',
        meansure: 'amperes',
        unit :'A'
    },
    {
        id: 3,
        name: 'Potência',
        tag: 'potencia_kW',
        meansure: 'kilowatts',
        unit :'kW'
    },
    {
        id: 4,
        name: 'Temperatura',
        tag: 'temperatura_C',
        meansure: 'graus Celsius',
        unit :'°C'
    },
]