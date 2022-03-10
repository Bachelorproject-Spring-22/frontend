/* Eksempelet er kopiert fra: https://react-chartjs-2.js.org/examples/vertical-bar-chart */

/* https://stackoverflow.com/a/70593795/14447555 -> https://www.chartjs.org/docs/3.3.0/getting-started/integration.html#bundlers-webpack-rollup-etc*/

import { Bar } from 'react-chartjs-2';
import { useRef, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: 'rgba(255, 255, 255, 0.87)'
            }
        }
    },
    scales: {
        y: {
            grid: {
                display: true,
                color: "#BEAFD0"
              },
            ticks: {
                color: 'rgba(255, 255, 255, 0.87)'
            }
        },
        x: {
            grid: {
                display: false,
              },
            ticks: {
                color: 'rgba(255, 255, 255, 0.87)'
            }
        }
    }
};


const labels = ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6']

const data = {
    labels,
    datasets: [{
        label: 'Points',
        data: [120, 190, 300, 500, 560, 200],
        backgroundColor: 'rgb(0, 99, 132)'
    }]
}

function createGradient(ctx, area) {
    const colorStart = "#7F619C";
    const colorEnd = "#BEAFD0";

    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);

    return gradient;
}

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const chartRef = useRef(Bar);

    useEffect(() => {
        const chart = chartRef.current;

        if (!chart) {
            return;
        }


        const chartData = {
            ...data,
            datasets: data.datasets.map((dataset) => ({
                ...dataset,
                backgroundColor: createGradient(chart.ctx, chart.chartArea)
            }))
        };

        setChartData(chartData);
    }, []);

    return (
        <Bar ref={chartRef} options={options} data={chartData} />
    );

};

export default BarChart;