import React from 'react';
import cl from "./ExercisePage.module.css"
import start from "../../UI/images/start.png"

const StartExerciseButton = () => {
    return (
        <button className={cl.StartExerciseButton}>Начать зарядку<img src={start} width={25} height={25}/></button>
    );
};

export default StartExerciseButton;