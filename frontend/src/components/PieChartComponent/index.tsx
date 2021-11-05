import { useCallback, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Sector } from "recharts";
import { ClientData, ClientsData } from "types/Clients";
import { Equation } from "types/Equation";
import { NumberFormatter } from "types/Formatters";
import { PlantData } from "types/Plant";

type Props = {
    plantContent: PlantData,
    clientContent: ClientsData
}

const getClientData = (client: ClientData, deltaE: number, renevue: number) => {
    const percentage = client.usinas[0].percentualDeParticipacao /100

    return (
        {
            id: client.numeroCliente,
            name: client.nomeCliente,
            percentage,
            deltaE:  percentage * deltaE,
            income: percentage *  renevue
        }
    )
}

// adaptado de https://recharts.org/en-US/examples/CustomActiveShapePieChart
const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;

    const gray = '#8F8F8F';
    const secondady = '#DCE448';
  
    return (
      <g>
        <text x={cx} y={cy} dy={-30} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <text x={cx} y={cy} dy={-10} textAnchor="middle">
          {`${NumberFormatter(payload.deltaE)} kWh`}
        </text>
        <text x={cx} y={cy} dy={10} textAnchor="middle">
          {`R$ ${NumberFormatter(payload.income)}`}
        </text>
        <text x={cx} y={cy} dy={30} textAnchor="middle" fill={gray}>
          {`${(payload.percentage * 100).toFixed(2) } %`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={secondady}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 12}
          fill={secondady}
        />
      </g>
    );
  };

const PieChartComponent = ({ plantContent, clientContent }: Props) => {

    const deltaE = Equation(plantContent);
    const totalRenevue = deltaE * 0.95;
    const data = clientContent.map(item => getClientData(item, deltaE,totalRenevue));
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = useCallback(
        (_, index) => {
          setActiveIndex(index);
        },
        [setActiveIndex]
      );

    //console.log(data);

    return (
       <div style={{ width: '100%', height: '100%' }}>
           <p>
               Energia gerada: {NumberFormatter(deltaE)} kWh <br />
               Receita Total: R$ {NumberFormatter(totalRenevue)}
           </p>
            <ResponsiveContainer width={'100%'} height={'85%'}>
                <PieChart>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        innerRadius={100}
                        outerRadius={120}
                        fill="#42A3A3"
                        dataKey="income"
                        onMouseEnter={onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
       </div>
    );
}

export default PieChartComponent;