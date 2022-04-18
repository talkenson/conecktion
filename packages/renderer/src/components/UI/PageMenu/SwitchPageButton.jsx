import React from 'react';
import cl from './PageMenu.module.css';

const SwitchPageButton = ({text, link}) => {
    return (
        <button className={cl.SwitchPageButton} onClick={() => window.location.href = link}>
            {text}
        </button>
    );
};

export default SwitchPageButton;