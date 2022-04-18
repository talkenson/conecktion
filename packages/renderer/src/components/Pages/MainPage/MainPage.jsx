import React from 'react';
import Header from "../../UI/Header/Header";
import PageMenu from "../../UI/PageMenu/PageMenu";
import UserStateText from "./UserStateText";
import BodyStressChart from "./BodyStressChart";
import ExerciseTimer from "./ExerciseTimer";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <PageMenu/>
            <UserStateText percent={52}/>
            <BodyStressChart bodyStressData={[54, 23, 56, 12, 78, 55]}/>
            <ExerciseTimer timeToNextExercise={25}/>
        </div>
    );
};

export default MainPage;