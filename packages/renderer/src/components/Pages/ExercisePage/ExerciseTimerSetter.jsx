import React from 'react';
import cl from "./ExercisePage.module.css";
import store from "@/store"

const ExerciseTimerSetter = () => {
    return (
        <div className={cl.ExerciseTimerSetter}>
            <label htmlFor={"setExerciseTimer"}>Интервал между зарядкой: </label>
            <input type={"number"} id={"setExerciseTimer"} value={store.get("exerciseTimer")} size={20} onChange={e => store.set("exerciseTimer", e.target.value)}/>
             минут
            <br/>
            Время выполнения зарядки: 3 минуты
        </div>
    );
};

export default ExerciseTimerSetter;