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
        color: 'rgba(255, 255, 255, 0.87)',
        font: 'Arial sans-serif',
        padding: 15
      }
    }
  }
};

const PieChart = ({correct, incorrect}) => {
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Number of correct and incorrect answers",
        data: [correct, incorrect],
        backgroundColor: ["#7F619C", "#BEAFD0"]
      }
    ]
  };

  return (
    <Pie data={data} options={options} />
  );

};

export default PieChart;