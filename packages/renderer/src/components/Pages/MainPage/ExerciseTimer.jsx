import React from 'react';
import cl from "./MainPage.module.css"

const ExerciseTimer = ({timeToNextExercise}) => {
    return (
        <div className={cl.ExerciseTimer}>
            До следующей зарядки осталось {timeToNextExercise} минут.
        </div>
    );
};

export default ExerciseTimer;