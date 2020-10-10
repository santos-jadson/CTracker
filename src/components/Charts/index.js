import React from 'react'
import Chart from 'chart.js'

import './styles.css'
import { useEffect, useRef } from 'react'

const BarChart = ({ data }) => {
    const chartRef = useRef()

    useEffect(() => {
        barChart(data.confirmed, data.recovered, data.deaths)
    }, [data.confirmed, data.recovered, data.deaths])

    const barChart = (confirmed, recovered, deaths) => {
        const myChartRef = chartRef.current.getContext("2d");
            new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ['Infectaded', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    data: [confirmed.value, recovered.value, deaths.value],
                    backgroundColor: [
                        'rgba(141, 144, 255, 0.2)',
                        'rgba(152, 255, 156, 0.2)',
                        'rgba(247, 141, 149, 0.2)'
                    ],
                    borderColor: [
                        'rgba(141, 144, 255, 1)',
                        'rgba(152, 255, 156, 1)',
                        'rgba(247, 141, 149, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
            }
        });
    }
        
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        );
}

export default BarChart