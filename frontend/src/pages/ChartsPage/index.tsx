import './styles.scss';
import PlantDataJson from 'types/dadosUsina.json'
import LineChartComponent from 'components/LineChartComponent';
import { useEffect, useState } from 'react';
import { PlantData, PlantVariables, PlantVariablesType } from 'types/Plant';
import ChartInputRadio from 'components/ChartInputRadio';


const ChartsPage = () => {
    const [plantData, setPlantData] = useState<PlantData>();
    const [variableSelected, setVariableSeleted] = useState<PlantVariablesType>(PlantVariables[0]);

    const getVariable = (value: string) => {
        const variable = PlantVariables.filter(item => item.tag === value);

        setVariableSeleted(variable[0]);
    }

    useEffect(() => {
        setPlantData({ content: PlantDataJson });
    }, [])

    return (
        <div className='charts-page-container card-base'>
            <div className='plant-production-container'>
                <h4>Produção de uma usina fotovoltaica em um dia</h4>
                <ChartInputRadio selectedTag={value => getVariable(value)} />
                { plantData && <LineChartComponent content={plantData.content} variable={variableSelected} /> }
            </div>
            <div className='estimates-container'>
            <h4>Estimativa de retorno financeiro</h4>
            </div>
        </div>
    );
}

export default ChartsPage;