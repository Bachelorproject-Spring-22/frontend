import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
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
    ArcElement,
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
  }
};

export const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Number og correct and incorrect answers",
        data: [9, 1],
        backgroundColor: ["#7F619C", "#BEAFD0"]
      }
    ]
  };

const PieChart = () => {

    return (
        <Pie data={data} options={options} />
    );

};

export default PieChart;