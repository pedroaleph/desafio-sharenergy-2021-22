import './styles.scss';
import PlantDataJson from 'types/dadosUsina.json'
import LineChartComponent from 'components/LineChartComponent';
import { useEffect, useState } from 'react';
import { PlantData } from 'types/Plant';


const ChartsPage = () => {
    const [plantData, setPlantData] = useState<PlantData>();

    useEffect(() => {
        setPlantData({ content: PlantDataJson });
    }, [])

    return (
        <div className='charts-page-container card-base'>
            <div className='plant-production-container'>
                { plantData && <LineChartComponent content={plantData.content} /> }
            </div>
            <div className='estimates-container'>

            </div>
        </div>
    );
}

export default ChartsPage;