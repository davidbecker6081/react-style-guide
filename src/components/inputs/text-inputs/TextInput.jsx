import React from 'react';
import './TextInput.css';

export const TextInput = ({ className, placeholder, value, disabled }) => {
    return (
        <input 
            disabled={disabled}
            type='text'
            className={`text-input ${className}`}
            placeholder={placeholder}
            value={value}
        />
    )
};