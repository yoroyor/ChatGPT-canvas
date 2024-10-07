import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Nikkei225Price() {
  const [prices, setPrices] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get('http://localhost:8000/price');
        const { price, timestamp } = response.data;
        setPrices((prevPrices) => [...prevPrices, price]);
        setTimestamps((prevTimestamps) => [...prevTimestamps, timestamp]);
      } catch (err) {
        setError('Failed to fetch price');
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // 1 minute interval to fetch the price

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'NIKKEI 225 Stock Price',
        data: prices,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
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
        text: 'NIKKEI 225 Stock Price Over Time',
      },
    },
  };

  return (
    <div>
      <h1>NIKKEI 225 Stock Price</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}
