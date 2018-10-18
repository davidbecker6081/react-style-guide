import React from 'react';
import './TextInput.css';

export class TextInput extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    render() {
        const { className, placeholder, disabled, value } = this.props;

        return (
            <input 
                disabled={disabled}
                type='text'
                className={`text-input ${className}`}
                placeholder={placeholder}
                value={this.state.input || value}
                onChange={(e) => this.setState({ input: e.value })}
            />
        )    
    }
};