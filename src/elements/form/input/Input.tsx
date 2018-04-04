import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import {Color, colorValues, Size, SizeValues} from '../../../base/css';
import {State, StateValues} from '../../../base/css/state';
import HTMLComponent, {HTMLInputProps} from '../../../base/html/HTML';
import FormStyle from '../FormStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface InputProps extends HTMLInputProps {
    color?: string | Color;
    iSize?: string | Size;
    state?: string | State;
    onChange?: any;
}

const Input: React.SFC<InputProps> = (props: InputProps) => {

    const {
        color,
        iSize,
        state,
        type,
        className,
        ...inputProps
    } = props;


    const typeClass = (!type || type === 'text' || type === 'password') ? 'input' : type;

    const classNames = ClassNames(
        FormStyle[typeClass],
        FormStyle[color],
        FormStyle[iSize],
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
    iSize: PropTypes.oneOf(SizeValues),
    state: PropTypes.oneOf(StateValues),
};

Input.defaultProps = HTMLComponent.defaultProps;

Input.displayName = 'Input';

export default Input;
