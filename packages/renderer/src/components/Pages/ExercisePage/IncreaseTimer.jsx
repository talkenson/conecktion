import React from 'react';
import cl from "./ExercisePage.module.css"

const IncreaseTimer = () => {
    return (
        <div>
            <button className={cl.IncreaseTimer}>Отсрочить зарядку</button>
        </div>
    );
};

export default IncreaseTimer;