'use client'
import {Bar} from "react-chartjs-2";
import type {ChartData, ChartOptions} from 'chart.js';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";
import {useEffect, useState} from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type BarProps = {
    data: ChartData<'bar'>
    options: ChartOptions<'bar'>
}

const BarChart = () => {
    const [chartData, setChartData] = useState<BarProps['data']>({datasets: []})

    const [chartOptions, setChartOptions] = useState<BarProps['options']>()

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [12345, 22201, 28043, 25134, 18390, 29340, 9458],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                 title: {
                    display: true,
                     text: 'Daily Revenue'
                 }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <Bar data={chartData!}/>
            </div>
        </>
    )
}

export default BarChart