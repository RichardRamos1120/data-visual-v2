"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


export default  function BarChart ({ data }) {
  const chartContainer = useRef(null);
   
  useEffect(() => {
    let chartInstance = null;
    
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
  
      // Destroy the existing chart if it exists
      if (chartInstance) {
        chartInstance.destroy();
      }
  
      // Create a new chart
      chartInstance = new Chart(ctx, {
        type: data.type,
        data: {
          labels: data.labels,
          datasets: [
            {
              label: data.label,
              data: data.values,
              backgroundColor: data.backgroundColor,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  
    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <canvas ref={chartContainer} />
  );
};

