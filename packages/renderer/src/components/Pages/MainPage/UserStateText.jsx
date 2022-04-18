import React from "react";
import cl from "./MainPage.module.css"

const UserStateText = (props) => {

    function percentToTextState(percent) {
        if (percent > 50) {
            return "Позвоночник чрезмерно нагружен."
        }
        return  "Всё в норме."
    }

    return (
        <div className={cl.UserStateText}>
            <span>
                {percentToTextState(props.percent)}
                <br/>
                Ваше тело устало на {props.percent}%.
            </span>
        </div>
    );
};

export default UserStateText;