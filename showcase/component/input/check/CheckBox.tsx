import * as ClassNames from 'classnames';
import * as React from 'react';
import {Color, Size, State} from 'bambu/lib/base/css';
import {IEvent, InputProps} from 'bambu/lib/form';
import BaseInput, {BaseInputProps} from '../BaseInput';
import checkStyle from "./checkStyle";
import Generator from "wasabi-common/lib/util/Generator";

export interface CheckBoxProps extends BaseInputProps {
    name?: string;
    color?: string | Color;
    size?: string | Size;
    state?: string | State;
    inputProps?: InputProps;
    onChange?: (e: IEvent) => any;
    value?: boolean;
    type?: "checkbox" | "radio";
}

const CheckBox: React.SFC<CheckBoxProps> = (props: CheckBoxProps) => {
    const id = Generator.guid();
    const {type, value, name, placeholder, color, size, state, inputProps, onChange, label, className, ...fieldProps} = props;
    const classNames = ClassNames(checkStyle.isCheckradio, className);
    return (
        <BaseInput {...fieldProps}>
            <input className={classNames} type={type} name={name} checked={value}/>
            <label htmlFor={id}>{label}</label>
        </BaseInput>
    );
};

CheckBox.propTypes = {} as any;

CheckBox.defaultProps = {
    type: 'checkbox',
    value: false
};

CheckBox.displayName = 'CheckBox';

export default CheckBox;
