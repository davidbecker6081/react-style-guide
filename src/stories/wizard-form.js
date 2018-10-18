import React from 'react';
import '../index.css';
import '../utilities/layout.css';
import '../components/wizard-form/WizardForm.css';
import { HeadingWithSubheading } from '../components/form-elements/headings/HeadingWithSubheading';
import { LabeledInput } from '../components/form-elements/labeled-input/LabeledInput';
import { ProgressDots } from '../components/form-elements/progress-dots/ProgressDots';

export const WizardForm = () => {
    return (
        <div className="style-guide-container wizard-form">
            <HeadingWithSubheading
                className="wizard-form--header"
                headingType="h2"
                headingText="Wizard Form Step 2"
                subText="Sub Heading Goes Here" />
            <LabeledInput
                className="flex-container-column full-width"
                disabled={false}
                labelTitle="Text Box"
                inputClassName="text-input--white full-width"
                inputType="text"
                value=""
                placeholder="Type Something" />
            <LabeledInput
                className="flex-container-column full-width"
                disabled={false}
                labelTitle="Select Input"
                inputClassName="select-input--white full-width"
                inputType="select"
                options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']}
                placeholder="Select Something" />
            <ProgressDots
                length={3}
                selectedIndex={1}
                onClick={() => console.log('click')} />
        </div>
    )
};