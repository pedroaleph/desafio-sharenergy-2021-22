import { PlantData, PlantVariablesType } from 'types/Plant';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
import { NumberFormatter, TimeFormatter } from 'types/Formatters';

type Props = {
    content : PlantData,
    variable: PlantVariablesType
}

const LineChartComponent = ({ content, variable }: Props) => {
    const { name, tag , unit } = variable;

    const ToolTipFormatterHandler = (value: number, name: string) => (
        [`${NumberFormatter(value)} ${unit}` , name]
    );

    const ToolTipLabelFormatterHandler = (label: number) =>  {
        const { hour, min } = TimeFormatter(label);
        return 'Tempo : ' + hour + 'h e ' +  min + 'min';
    }

    return (
        <ResponsiveContainer width={"95%"} height={"55%"}>
             <LineChart
                margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    type="number"
                    dataKey="tempo_h"
                    name={name} unit="h"
                    domain={[0, 24]} 
                    tickCount={9}
                />
                <YAxis
                    type="number"
                    dataKey={tag} 
                    name={name} 
                    unit={unit}
                />
                <Tooltip
                    formatter={ToolTipFormatterHandler}
                    labelFormatter={ToolTipLabelFormatterHandler}
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