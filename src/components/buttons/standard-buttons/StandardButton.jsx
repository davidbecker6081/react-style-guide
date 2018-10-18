import React from 'react';
import './StandardButton.css';

export const StandardButton = ({ text, onClick, className, disabled }) => {
    return (
        <button
            className={`standard-button ${className}`}
            onClick={() => onClick()}
            disabled={disabled} >
            { text }
        </button>
    )
};
