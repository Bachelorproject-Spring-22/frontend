/* Eksempelet er kopiert fra: https://react-chartjs-2.js.org/examples/vertical-bar-chart */

/* https://stackoverflow.com/a/70593795/14447555 -> https://www.chartjs.org/docs/3.3.0/getting-started/integration.html#bundlers-webpack-rollup-etc*/

import { Bar } from 'react-chartjs-2';

import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

Chart.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {

    return (
        <Bar data={{
            labels: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6'],
            datasets: [{
                label: 'Points pr quiz',
                data: [120, 190, 300, 500, 2000, 3000],
                backgroundColor: 'rgb(255, 99, 132)'
            }]
        }} />
    );

};

export default BarChart;