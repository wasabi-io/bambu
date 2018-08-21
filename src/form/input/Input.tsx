import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, colorValues, HTMLComponent, HTMLInputProps, Size, sizeValues, State, stateValues} from '../../index';
import {InputFieldChange} from "./InputField";
import {Color} from "../../base/index";

/**
 * Refers Html Props and Additional Props.
 */
export interface InputProps extends HTMLInputProps {
    name?: string;
    value?: any;
    color?: string | Color;
    bSize?: string | Size;
    onChange?: InputFieldChange;
    state?: string | State;
    elementRef?: (ref: any) => any;
}

export default class Input extends React.Component<InputProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        name: PropTypes.string,
        value: PropTypes.any,
        color: PropTypes.oneOf(colorValues),
        bSize: PropTypes.oneOf(sizeValues),
        state: PropTypes.oneOf(stateValues),
        onChange: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        type: "text"
    };

    public render() {
        const {color, bSize, state, type, className, elementRef, children, ...inputProps} = this.props;

        const classNames = ClassNames(FormStyle.input, FormStyle[color], FormStyle[bSize], FormStyle[state], className);

        return (
            <input type={type} className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </input>
        );
    }
}
