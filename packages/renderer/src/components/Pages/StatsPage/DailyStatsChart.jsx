import {React, useEffect, useMemo, useRef} from 'react'
import {Bar} from "react-chartjs-2";
import cl from "./StatsPage.module.css"

const options = {
    scales: {
        r: {
            angleLines: {
                display: false
            }
        },
        suggestedMin: 0,
        suggestedMax: 24,
        grouped: true,
        barValueSpacing: 0
    }
};

const DailyStatsChart = ({dates, workingHours, bodyStress}) => {
    const data = useMemo(() => ({
        labels: dates,
        datasets: [
            {
                label: 'Нагрузка на тело',
                data: bodyStress,
                fill: true,
                type: "line",
                backgroundColor: 'rgba(220,113,139,0.2)',
                borderColor: 'rgb(131,68,83)',
                pointBackgroundColor: 'rgb(220,113,139)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(220,113,139)'
            },
            {
            label: 'Кол-во рабочих часов',
            data: workingHours,
            fill: true,
            backgroundColor: 'rgba(66,210,223,0.2)',
            borderColor: 'rgb(33,105,112)',
            pointBackgroundColor: 'rgb(66,210,223)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(66,210,223)'}]}), [workingHours, bodyStress]);



    return (
        <div className={cl.DailyStatsChart}>
            <Bar type={'bar'} data={data} options={options} />
        </div>
    );
};

export default DailyStatsChart;