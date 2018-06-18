import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, Color, colorValues, HTMLComponent, HTMLInputProps, Size, sizeValues, State, stateValues} from '../../index';

/**
 * Refers Html Props and Additional Props.
 */
export interface InputProps extends HTMLInputProps {
    color?: string | Color;
    bSize?: string | Size;
    state?: string | State;
    onChange?: any;
    elementRef?: (ref: any) => any;
}

export default class Input extends React.Component<InputProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
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
        const {
            color,
            bSize,
            state,
            type,
            className,
            elementRef,
            children,
            ...inputProps
        } = this.props;

        const classNames = ClassNames(
            FormStyle.input,
            FormStyle[color],
            FormStyle[bSize],
            FormStyle[state],
            className
        );

        return (
            <input type={type} className={classNames} ref={elementRef} {...inputProps}>
                {children}
            </input>
        );
    }
}
