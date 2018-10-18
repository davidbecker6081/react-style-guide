import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import '../index.css';
import '../utilities/layout.css';
import App from '../App';
import { StorybookButtons } from './buttons';
import { StorybookSelectInputs } from './select-inputs';
import { StorybookTextInputs } from './text-inputs';

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
      );
    