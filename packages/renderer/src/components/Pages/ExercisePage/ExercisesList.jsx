import React from 'react';
import cl from "./ExercisePage.module.css"
import ExerciseBlock from "./ExerciseBlock";
import neckIcon from "../../UI/images/bodyJointsIcons/neck.png";
import shoulderIcon from "../../UI/images/bodyJointsIcons/shoulders.png";
import spineIcon from "../../UI/images/bodyJointsIcons/spine.png";

const ExercisesList = () => {
    return (
        <div className={cl.ExerciseList}>
            <ExerciseBlock name={"Повороты шеи в стороны"} repeatsCount={10} icon={neckIcon}/>
            <ExerciseBlock name={"Вращение плечами"} repeatsCount={16} icon={shoulderIcon}/>
            <ExerciseBlock name={"Наклоны шеи в стороны"} repeatsCount={10} icon={neckIcon}/>
            <ExerciseBlock name={"Вращение плечами"} repeatsCount={16} icon={shoulderIcon}/>
            <ExerciseBlock name={"Повороты тела"} repeatsCount={12} icon={spineIcon}/>
        </div>
    );
};

export default ExercisesList;