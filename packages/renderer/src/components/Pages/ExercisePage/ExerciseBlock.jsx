import React from 'react';
import cl from "./ExercisePage.module.css"

const ExerciseBlock = ({name, repeatsCount, icon}) => {
    return (
        <div className={cl.ExerciseBlock}>
            {name}
            <img src={icon} className={cl.ExerciseBlockIcon}/>
            <br/>
            количество повторений: {repeatsCount}
        </div>
    );
};

export default ExerciseBlock;