import React from 'react';
import '../index.css';
import '../utilities/layout.css';
import { LabeledInput } from '../components/form-elements/labeled-input/LabeledInput';

export const StorybookLabeledInputs = () => {
    return (
        <div className="flex-container-column style-guide-container">
            <h2>Inputs With Labels</h2>
            <LabeledInput
                className="flex-container-column"
                disabled={false}
                labelTitle="Text Box"
                inputClassName="text-input--white"
                inputType="text"
                value=""
                placeholder="Type Something" />
            <LabeledInput
                className="flex-container-column"
                disabled={false}
                labelTitle="Select Input"
                inputClassName="select-input--white"
                inputType="select"
                options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']}
                placeholder="Select Something" />
        </div>
    )
};