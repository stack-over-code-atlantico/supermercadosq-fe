import {CardDashboard} from './styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        console.log('--------------------value')
        console.log(value)
        let datasets = ctx.chart.data.datasets;
        console.log('datasets:  ',datasets)
        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
          let sum = datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = Math.round((value / sum) * 100) + "%";
          return percentage;
        } else {
          return percentage;
        }
      },
      color: "red"
    }
  }
};

export const data = {
  labels: ['Comentários', 'Usuários','Postagens'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 10],
      backgroundColor: [
        '#ffb3b2',
        '#c0f5ff',
        '#dbffc1'
      ],
      borderColor: [
        '#fff',
        '#fff',
        '#fff'
      ],
      borderWidth: 4,
    },
  ],
  options: {
    plugins: {
        title: {
            display: false,
            text: 'Chart Title'
        }
    },
}
};

export function CardsDashboard({ height, width}){

  return (
    <CardDashboard height={height} width={width}>
      <Pie data={data} width={50} height={50}  />
    </CardDashboard>
  );
}
