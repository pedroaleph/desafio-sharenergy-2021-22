import './styles.scss';
import PlantDataJson from 'types/dadosUsina.json';
import ClientsDataJson from 'types/dadosClientes.json';
import LineChartComponent from 'components/LineChartComponent';
import { useEffect, useState } from 'react';
import { PlantData, PlantVariables, PlantVariablesType } from 'types/Plant';
import ChartInputRadio from 'components/ChartInputRadio';
import PieChartComponent from 'components/PieChartComponent';
import { ClientsData } from 'types/Clients';


const ChartsPage = () => {
    const [plantData, setPlantData] = useState<PlantData>();
    const [variableSelected, setVariableSeleted] = useState<PlantVariablesType>(PlantVariables[0]);
    const [clientsData, setClientsData] = useState<ClientsData>();

    const getVariable = (value: string) => {
        const variable = PlantVariables.filter(item => item.tag === value);

        setVariableSeleted(variable[0]);
    }

    useEffect(() => {
        setPlantData(PlantDataJson);
        setClientsData(ClientsDataJson);
    }, [])

    return (
        <div className='charts-page-container card-base'>
            <div className='plant-production-container'>
                <h4>Produção de uma usina fotovoltaica em um dia</h4>
                <p className='text-gray'>Variáveis de interesse:</p>
                <ChartInputRadio selectedTag={value => getVariable(value)} />
                {
                    plantData &&
                        <LineChartComponent 
                            content={plantData} 
                            variable={variableSelected}
                        />
                }
                <div style={{ marginBottom: 20 }}/>
            </div>
            <div className='estimates-container'>
                <h4>Estimativa de retorno financeiro</h4>
                {
                    (plantData && clientsData) &&
                        <PieChartComponent
                            plantContent={plantData}
                            clientContent={clientsData}
                        /> 
                }
            </div>
        </div>
    );
}

export default ChartsPage;