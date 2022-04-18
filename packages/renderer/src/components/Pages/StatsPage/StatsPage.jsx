import React from 'react';
import Header from "../../UI/Header/Header";
import PageMenu from "../../UI/PageMenu/PageMenu";
import DailyStatsChart from "./DailyStatsChart";
import StatsComment from "./StatsComment";

const StatsPage = () => {
    return (
        <div>
            <Header/>
            <PageMenu/>
            <DailyStatsChart dates={["08.04", "09.04", "10.04", "11.04", "12.04", "13.04", "14.04"]}
                             bodyStress={[12*0.5, 20*0.7, 18*0.3, 9*0.9, 5*0.4, 12*0.4, 17*0.7]}
                             workingHours={[12, 20, 18, 9, 5, 12, 17]}/>
            <StatsComment/>
        </div>
    );
};

export default StatsPage;