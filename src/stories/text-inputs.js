import React from 'react';
import '../index.css';
import '../utilities/layout.css';
import { TextInput } from '../components/inputs/text-inputs/TextInput';

export const StorybookTextInputs = () => {
    return (
        <div className="flex-container-row style-guide-container">
          <div>
            <h2>Standard Text</h2>
            <div className="flex-container-column">
                <TextInput
                    disabled={false}
                    className="text-input--white"
                    placeholder="Insert Text Here" />
                <TextInput
                    disabled={false}
                    className="text-input--white"
                    placeholder="Insert Text Here"
                    value="Value Example" />
            </div>
          </div>
          <div>
            <h2>Disabled Text</h2>
            <div className="flex-container-column">
                <TextInput
                    disabled={true}
                    className="text-input--white"
                    placeholder="Insert Text Here" />
                <TextInput
                    disabled={true}
                    className="text-input--white"
                    placeholder="Insert Text Here"
                    value="Value Example" />
            </div>
          </div>
        </div>
    )
};