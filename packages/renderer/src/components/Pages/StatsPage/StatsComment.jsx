import React from 'react';
import cl from "./StatsPage.module.css";

const StatsComment = ({workingHours, bodyStress}) => {

    function getComment(workingHours, bodyStress) {
        return "За прошедшие 7 дней вы эффективно выполняли упражнения"
    }

    return (
        <div className={cl.StatsComment}>
            {getComment(workingHours, bodyStress)}
        </div>
    );
};

export default StatsComment;