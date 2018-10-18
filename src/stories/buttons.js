import React from 'react';
import { action } from '@storybook/addon-actions';
import '../index.css';
import '../utilities/layout.css';
import { StandardButton } from '../components/buttons/standard-buttons/StandardButton';
import { ButtonWithIcon } from '../components/buttons/buttons-with-icons/ButtonWithIcon';

export const StorybookButtons = () => {
    return (
        <div class='style-guide-container'>
          <h2>Standard Button</h2>
          <div>
            <StandardButton
              className="standard-button--default"
              text="Default"
              disabled={false}
              onClick={action('standard button clicked')} />
            <StandardButton
              className="standard-button--blue"
              text="Blue"
              disabled={false}
              onClick={action('standard button clicked')} />
            <StandardButton
              className="standard-button--white-with-blue-outline"
              text="White"
              disabled={false}
              onClick={action('standard button clicked')} />
            <StandardButton
              className="standard-button--white-with-black-outline"
              text="Black"
              disabled={false}
              onClick={action('standard button clicked')} />
          </div>
          <h2>Standard Button Disabled</h2>
          <div>
            <StandardButton
              className="standard-button--default"
              text="Default"
              disabled={true}
              onClick={action('standard button clicked')} />
            <StandardButton
              className="standard-button--blue"
              text="Blue"
              disabled={true}
              onClick={action('standard button clicked')} />
            <StandardButton
              className="standard-button--white-with-blue-outline"
              text="White"
              disabled={true}
              onClick={action('standard button clicked')} />
            <StandardButton
              className="standard-button--white-with-black-outline"
              text="Black"
              disabled={true}
              onClick={action('standard button clicked')} />
          </div>
          <h2>Standard Button With Icon</h2>
          <div>
            <ButtonWithIcon
              iClass="icon_plus"
              className="standard-button-with-icon--default"
              text="Default"
              disabled={false}
              onClick={action('standard button clicked')} />
            <ButtonWithIcon
              iClass="icon_plus"
              className="standard-button-with-icon--blue"
              text="Blue"
              disabled={false}
              onClick={action('standard button clicked')} />
            <ButtonWithIcon
              iClass="icon_plus"
              className="standard-button-with-icon--white-with-blue-outline"
              text="White"
              disabled={false}
              onClick={action('standard button clicked')} />
            <ButtonWithIcon
              iClass="icon_plus"
              className="standard-button-with-icon--white-with-black-outline"
              text="Black"
              disabled={false}
              onClick={action('standard button clicked')} />
          </div>
          <h2>Standard Button With Icon Disabled</h2>
          <div>
            <ButtonWithIcon
              iClass="icon_plus"
              className="standard-button-with-icon--default"
              text="Default"
              disabled={true}
              onClick={action('standard button clicked')} />
            <ButtonWithIcon
              iClass="icon_plus"
              className="standard-button-with-icon--blue"
              text="Blue"
              disabled={true}
              onClick={action('standard button clicked')} />
            <ButtonWithIcon
              iClass="icon_plus"
              className="standard-button-with-icon--white-with-blue-outline"
              text="White"
              disabled={true}
              onClick={action('standard button clicked')} />
            <ButtonWithIcon
              iClass="icon_plus"
              className="standard-button-with-icon--white-with-black-outline"
              text="Black"
              disabled={true}
              onClick={action('standard button clicked')} />
          </div>
        </div>
    )
};