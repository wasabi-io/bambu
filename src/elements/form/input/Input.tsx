import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, Color, colorValues, HTMLComponent, HTMLInputProps, Size, sizeValues, State, stateValues} from '../../../';


/**
 * Refers Html Props and Additional Props.
 */
export interface InputProps extends HTMLInputProps {
    color?: string | Color;
    bSize?: string | Size;
    state?: string | State;
    onChange?: any;
}

const Input: React.SFC<InputProps> = (props: InputProps) => {

    const {
        color,
        bSize,
        state,
        type,
        className,
        ...inputProps
    } = props;


    const typeClass = (!type || type === 'text' || type === 'password') ? 'input' : type;

    const classNames = ClassNames(
        FormStyle[typeClass],
        FormStyle[color],
        FormStyle[bSize],
        FormStyle[state],
        className
    );

    return (
        <input type={type} className={classNames} {...inputProps} >
            {props.children}
        </input>
    );
};

Input.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    bSize: PropTypes.oneOf(sizeValues),
    state: PropTypes.oneOf(stateValues),
    onChange: PropTypes.func
};

Input.defaultProps = HTMLComponent.defaultProps;

Input.displayName = 'Input';

export default Input;
