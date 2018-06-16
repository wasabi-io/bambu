import * as React from 'react';
import {Color, Size, State} from 'bambu/lib/base/css';
import {Input, InputProps} from 'bambu/lib/elements/form';

import BaseInput, {BaseInputProps} from './BaseInput';
import {IEvent} from "../field/Field";

export interface DefaultInputProps extends BaseInputProps {
    name?: string;
    placeholder?: string;
    color?: string | Color;
    size?: string | Size;
    state?: string | State;
    inputProps?: InputProps;
    onChange?: (e: IEvent) => any;
    value?: any;
    type?: string;
}

const DefaultInput: React.SFC<DefaultInputProps> = (props: DefaultInputProps) => {
    const {type, value, name, placeholder, color, size, state, inputProps, onChange, ...fieldProps} = props;

    if (type === 'checkbox') {
        if (value !== '' && value !== undefined) {
            inputProps.checked = value;
        }
    }
    return (
        <BaseInput  {...fieldProps}>
            <Input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                color={color}
                bSize={size}
                state={state}
                {...inputProps}
                onChange={(e: any) => {
                    if (onChange) {
                        if (type === 'checkbox') {
                            e.target.value = e.target.checked;
                        }
                        onChange(e);
                    }
                }}
            />
        </BaseInput>
    );
};

DefaultInput.propTypes = {};

DefaultInput.defaultProps = {
    type: 'text'
};

DefaultInput.displayName = 'DefaultInput';

export default DefaultInput;
