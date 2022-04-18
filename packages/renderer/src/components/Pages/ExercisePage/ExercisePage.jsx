import React from 'react';
import Header from "../../UI/Header/Header";
import PageMenu from "../../UI/PageMenu/PageMenu";
import ExerciseTimer from "../MainPage/ExerciseTimer";
import cl from "./ExercisePage.module.css"
import ExerciseTimerSetter from "./ExerciseTimerSetter";
import IncreaseTimer from "./IncreaseTimer";
import ExercisesList from "./ExercisesList";
import StartExerciseButton from "./StartExerciseButton";

const ExercisePage = () => {
    return (
        <div>
            <Header/>
            <PageMenu/>
            <div className={cl.ExerciseTimer}>
                <ExerciseTimer timeToNextExercise={25}/>
            </div>
            <ExerciseTimerSetter/>
            <IncreaseTimer/>
            <ExercisesList/>
            <StartExerciseButton/>
        </div>
    );
};

export default ExercisePage;