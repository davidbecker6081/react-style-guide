import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import '../index.css';
import '../utilities/layout.css';
import '../utilities/storybook.css';
import App from '../App';
import { StorybookButtons } from './buttons';
import { StorybookSelectInputs } from './select-inputs';
import { StorybookTextInputs } from './text-inputs';
import { StorybookLabeledInputs } from './labeled-inputs';
import { WizardForm } from './wizard-form';

storiesOf('App', module)
  .add('Original', () => (
    <App />
  ));


storiesOf('Components', module)
    storiesOf('Buttons', module)
      .add('Standard Buttons', () => 
        <StorybookButtons />
      );
    storiesOf('Inputs', module)
      .add('Select Inputs', () =>
        <StorybookSelectInputs />
      )
      .add('Text Inputs', () =>
        <StorybookTextInputs />
      )
      .add('Labeled Inputs', () =>
        <StorybookLabeledInputs />
      )
    storiesOf('Wizard Form', module)
      .add('Wizard Form', () => 
        <WizardForm />
      );
    