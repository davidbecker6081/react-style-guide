import React from 'react';
import { TextInput } from '../../inputs/text-inputs/TextInput';
import { SelectInput } from '../../inputs/select-inputs/SelectInput';
import './LabeledInput.css';

export const LabeledInput = ({ labelTitle, inputClassName, inputType, value = '', options = [], placeholder, disabled, className }) => {
    const inputMap = {
        text: <TextInput className={inputClassName} placeholder={placeholder} disabled={disabled} />,
        select: <SelectInput className={inputClassName} placeholder={placeholder} options={options} disabled={disabled} />
    };

    return (
        <div className={`labeled-input ${className}`}>
            <label className="labeled-input--label">{ labelTitle }</label>
            { inputMap[inputType] }
        </div>
    )
};