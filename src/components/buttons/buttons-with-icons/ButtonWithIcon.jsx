import React from 'react';
import './ButtonWithIcon.css';

export const ButtonWithIcon = ({ text, onClick, className, iClass, disabled }) => {
    return (
        <button
            className={`standard-button-with-icon ${className}`}
            onClick={() => onClick()}
            disabled={disabled} >
            <i class={`icon button-icon ${iClass}`}></i>
            { text }
        </button>
    )
};
