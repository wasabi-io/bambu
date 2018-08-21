import * as ClassNames from 'classnames';
import * as React from 'react';
import {Color, Size, State} from 'bambu/lib/base/css';
import {IEvent, InputProps} from 'bambu/lib/form';
import BaseInput, {BaseInputProps} from '../BaseInput';
import switchStyle from "./switchStyle";
import Generator from "wasabi-common/lib/util/Generator";

export interface SwitchInputProps extends BaseInputProps {
    name?: string;
    color?: string | Color;
    size?: string | Size;
    state?: string | State;
    inputProps?: InputProps;
    onChange?: (e: IEvent) => any;
    value?: boolean;
    type?: "checkbox" | "radio";
}

const SwitchInput: React.SFC<SwitchInputProps> = (props: SwitchInputProps) => {
    const id = Generator.guid();
    const {type, value, name, placeholder, color, size, state, inputProps, onChange, label, className, children, ...fieldProps} = props;
    const classNames = ClassNames(switchStyle.switch, className);
    return (
        <BaseInput {...fieldProps}>
            <input className={classNames} type={type} name={name} checked={value}/>
            <label htmlFor={id}>{label}</label>
        </BaseInput>
    );
};

SwitchInput.propTypes = {} as any;

SwitchInput.defaultProps = {
    type: 'checkbox',
    value: false
};

SwitchInput.displayName = 'SwitchInput';

export default SwitchInput;
