import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ClientsData } from "types/Clients";
import { Equation } from "types/Equation";
import { PlantData } from "types/Plant";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

type Props = {
    plantContent: PlantData,
    clientContent: ClientsData
}

const PieChartComponent = ({ plantContent, clientContent }: Props) => {

    const deltaE = Equation(plantContent);
    const totalRenevue = deltaE * 0.95;
    const data = clientContent.map(item => {
        const percentage = item.usinas[0].percentualDeParticipacao

        return (
            {
                id: item.numeroCliente,
                name: item.nomeCliente,
                percentage,
                income: (percentage / 100) *  totalRenevue
            }
        )
    });

    console.log(data);

    return (
        <PieChart width={800} height={400}>
            <Legend />
            <Tooltip />
            <Pie dataKey={''}
                innerRadius={30}
                outerRadius={30}
                fill="#8884d8"
                paddingAngle={5}/>
            <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="income"
                label={index => {
                    console.log(index);
                    return index.percentage + '%'
                } }
                labelLine={false}
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}

export default PieChartComponent;