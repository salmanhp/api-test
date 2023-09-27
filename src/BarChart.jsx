import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export const BarChart = () => {
    return (
        <div style={{ height: '100%', width: '99%' }}>
            <Bar
                data={{
                    labels: ['Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct'],
                    datasets: [{
                        label: 'My Sales',
                        data: [21, 30, 20, 36, 26, 30, 26, 35, 39],

                    }
                    ],


                }}

                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            max: 40,
                            min: 0,

                            ticks: {
                                stepSize: 10,
                                callback: function (value, index, ticks) {
                                    return value + 'k';
                                }
                            }
                        },

                    }
                }}

            />
        </div>
    )
}
