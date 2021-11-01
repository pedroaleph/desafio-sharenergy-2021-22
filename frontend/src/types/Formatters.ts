export const NumberFormatter = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    }).format(value);
}

export const TimeFormatter = (time: number) => {
    const hour = Math.trunc(time);
    const min = Math.fround((Math.abs(time) - hour) * 60);

    return { hour, min }
}