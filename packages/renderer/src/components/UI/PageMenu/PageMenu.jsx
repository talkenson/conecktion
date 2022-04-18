import React from 'react';
import cl from "./PageMenu.module.css"
import SwitchPageButton from "./SwitchPageButton";

const PageMenu = () => {
    return (
        <div className={cl.PageMenu}>
            <span>
                <SwitchPageButton text={"Главная"} link={"/"}/>
                <SwitchPageButton text={"Упражнения"} link={"/exercises"}/>
                <SwitchPageButton text={"Статистика"} link={"/stats"}/>
            </span>
        </div>
    );
};

export default PageMenu;