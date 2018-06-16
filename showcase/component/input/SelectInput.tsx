import * as React from 'react';
import {Color, Size, State} from 'bambu/lib/base/css';
import {Select, SelectProps} from 'bambu/lib/elements/form';
import BaseInput, {BaseInputProps} from './BaseInput';
import {IEvent} from "../field/Field";

export interface DefaultInputProps extends BaseInputProps {
    name?: string;
    placeholder?: string;
    color?: string | Color;
    iSize?: string | Size;
    state?: string | State;
    inputProps?: SelectProps;
    onChange?: (e: IEvent) => any;
    value?: any;
    type?: string;
}

const SelectInput: React.SFC<DefaultInputProps> = (props: DefaultInputProps) => {
    const {type, value, name, placeholder, color, iSize, state, inputProps, ...fieldProps} = props;
    return (
        <BaseInput  {...fieldProps}>
            <Select
                value={value}
                name={name}
                placeholder={placeholder}
                color={color}
                bSize={iSize}
                state={state}
                {...inputProps}
            />
        </BaseInput>
    );
};

SelectInput.propTypes = {};

SelectInput.defaultProps = {};

SelectInput.displayName = 'SelectInput';

export default SelectInput;
