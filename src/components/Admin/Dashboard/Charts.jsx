import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SalesChart = () => {
    const data = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        datasets: [
            {
                label: 'Monthly sales',
                data: [1504, 720, 1000, 850, 930 , 1250, 1100, 1400, 1600, 1800, 2000, 2200],
                backgroundColor: '#ffd700',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales statistics',
            },
        },
    };

    return (
        <div className='charts-data' style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default SalesChart;