import { PlantDataContent, PlantVariablesType } from 'types/Plant';
import './styles.scss';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

const NumberFormatter = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(value);
}

const timeFormatter = (time: number) => {
    const hour = Math.trunc(time);
    const min = Math.fround((Math.abs(time) - hour) * 60);

    return 'Tempo : ' + hour + 'h e ' +  min + 'min';
}

type Props = {
    content : PlantDataContent[],
    variable: PlantVariablesType
}

const LineChartComponent = ({ content, variable }: Props) => {

    const { name, tag , unit } = variable;

    return (
        <ResponsiveContainer width={"95%"} height={"55%"}>
             <LineChart
                width={700}
                height={300}
                margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="tempo_h" name={name} unit="h" domain={[0, 24]} tickCount={9} />
                <YAxis type="number" dataKey={tag} name={name} unit={unit} />
                <Tooltip
                    formatter={(value: number , name :string) => [`${NumberFormatter(value)} ${unit}` , name ]}
                    labelFormatter={(label) => timeFormatter(label)}
                />
                <Line
                    type="monotone"
                    data={content}
                    dataKey={tag}
                    name={name}
                    stroke="#42A3A3"
                    dot={false}
                    strokeWidth={2}
                />
            </LineChart>    
        </ResponsiveContainer>
    );
}

export default LineChartComponent;