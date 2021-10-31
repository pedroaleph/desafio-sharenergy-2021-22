import { PlantData } from 'types/Plant';
import './styles.scss';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";



const LineChartComponent = ({ content }: PlantData) => {

    return (
    <LineChart
        width={700}
        height={300}
        data={content}
        margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
    }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="tempo_h" name="tempo" unit="h" domain={[0, 24]} tickCount={9} />
        <YAxis type="number" dataKey="tensao_V" name="tensão" unit="V" />
        <Tooltip
        />
        <Line
            type="monotone"
            dataKey='tensao_V'
            stroke="#42A3A3"
            dot={false}
        />
    </LineChart>
    );
}

export default LineChartComponent;