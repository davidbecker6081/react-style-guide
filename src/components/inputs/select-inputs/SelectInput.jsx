import React from 'react';
import './SelectInput.css';

export const SelectInput = ({ className, options, disabled, placeholder }) => {
    const renderOptions = () => options.map((option) => <option>{option}</option>);

    return (
        <select disabled={disabled} type='text' class={`a-select ${className}`}>
        <option>{ placeholder }</option>
            { renderOptions() }
        </select>
    )
};