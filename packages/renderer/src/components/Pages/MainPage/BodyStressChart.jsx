import {useMemo} from 'react'
import cl from "./MainPage.module.css"
import {Radar} from "react-chartjs-2";


const options = {
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 100
        }
    }
};

const BodyStressChart = ({bodyStressData}) => {
    const data = useMemo(() => ({
        labels: [
            "глаза",
            "шея",
            "спина",
            "руки",
            "плечи",
            "глаза"
        ],
        datasets: [{
            label: 'уровень нагрузки',
            data: bodyStressData,
            fill: true,
            backgroundColor: 'rgba(66,210,223,0.2)',
            borderColor: 'rgb(66,210,223)',
            pointBackgroundColor: 'rgb(66,210,223)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(66,210,223)'
        }]
    }), [bodyStressData])


    return (
        <div className={cl.BodyStressChart}>
            <Radar type={'radar'} data={data} options={options}/>
        </div>
    );
};

export default BodyStressChart;