import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import { Color, colorValues, Size, SizeValues } from "rebul/lib/base/css";
import { State, StateValues } from "rebul/lib/base/css/state";
import HTMLComponent, { HTMLInputProps } from "../../../base/html/HTML";
import FormStyle from "../FormStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface InputProps extends HTMLInputProps {
    color?: string | Color;
    iSize?: string | Size;
    state?: string | State;
}

const Input: React.SFC<InputProps> = (props: InputProps) => {

    const {
        color,
        iSize,
        state,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.input,
        FormStyle[color],
        FormStyle[iSize],
        FormStyle[state],
        className
    ]);

    return (
        <input className={classNames} {...inputProps} >
            {props.children}
        </input>
    );
};

Input.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    iSize: PropTypes.oneOf(SizeValues),
    state: PropTypes.oneOf(StateValues),
};

Input.defaultProps = HTMLComponent.defaultProps;

Input.displayName = "Input";

export default Input;
