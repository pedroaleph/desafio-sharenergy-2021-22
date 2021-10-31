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

const timeFormatter = (time: number) => {
    const hour = Math.trunc(time);
    const min = Math.fround((Math.abs(time) - hour) * 60);

    return 'Tempo: ' + hour + 'h e ' +  min + 'min';
}

const LineChartComponent = ({ content }: PlantData) => {

    return (
    <LineChart
        width={700}
        height={300}
        margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
    }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="tempo_h" unit="h" domain={[0, 24]} tickCount={9} />
        <YAxis type="number" dataKey="tensao_V" unit="V" />
        <Tooltip
            formatter={(value: number , name :string) => [`${value} volts` ,"Tensão"]}
            labelFormatter={(label) => timeFormatter(label)}
        />
        <Line
            type="monotone"
            data={content}
            dataKey={"tensao_V"}
            stroke="#42A3A3"
            dot={false}
        />
    </LineChart>
    );
}

export default LineChartComponent;