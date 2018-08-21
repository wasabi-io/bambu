import * as React from 'react';
import {Color, Size, State} from 'bambu/lib/base/css';
import {IEvent, TextArea, TextAreaProps} from 'bambu/lib/form';
import BaseInput, {BaseInputProps} from './BaseInput';

export interface DefaultInputProps extends BaseInputProps {
    name?: string;
    placeholder?: string;
    color?: string | Color;
    size?: string | Size;
    state?: string | State;
    inputProps?: TextAreaProps;
    onChange?: (e: IEvent) => any;
    value?: any;
    type?: string;
}

const TextAreaInput: React.SFC<DefaultInputProps> = (props: DefaultInputProps) => {
    const {type, value, name, placeholder, color, size, state, inputProps, ...fieldProps} = props;
    return (
        <BaseInput  {...fieldProps}>
            <TextArea
                value={value}
                name={name}
                placeholder={placeholder}
                color={color}
                bSize={size}
                state={state}
                {...inputProps}
            />
        </BaseInput>
    );
};

TextAreaInput.propTypes = {} as any;

TextAreaInput.defaultProps = {};

TextAreaInput.displayName = 'TextAreaInput';

export default TextAreaInput;
