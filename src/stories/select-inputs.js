import React from 'react';
import '../index.css';
import '../utilities/layout.css';
import { SelectInput } from '../components/inputs/select-inputs/SelectInput';

export const StorybookSelectInputs = () => {
    return (
        <div className="flex-container-row style-guide-container">
          <div>
            <h2>Standard Select</h2>
            <SelectInput
              disabled={false}
              className="select-input--white"
              placeholder="Select Something"
              options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']} />
          </div>
          <div>
            <h2>Disabled Select</h2>
            <SelectInput
              disabled={true}
              className="select-input--white"
              placeholder="Select Something"
              options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']} />
          </div>
        </div>
    )
};
