import { PlantData } from "./Plant";

export const Equation = (data: PlantData) => {
    // numero total de dados
    //const N = data.length;
    // intevalo da amostragem fixo
    const deltaT = Math.abs(data[0].tempo_h - data[1].tempo_h);
    // energia gerada
    const potencias = data.map(item => item.potencia_kW);
    const deltaE = deltaT * getSum(potencias);

    return deltaE;

    //console.log(N, TimeFormatter(deltaT), deltaE);
}

const getSum = (numbers: number[]) => {
    return numbers.reduce(
        (previousValue: number, currentValue: number) => previousValue + currentValue
        , 0);
}