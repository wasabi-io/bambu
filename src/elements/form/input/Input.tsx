import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
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

export default class Input extends React.Component<InputProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
        bSize: PropTypes.oneOf(sizeValues),
        state: PropTypes.oneOf(stateValues),
        onChange: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render() {
        const {
            color,
            bSize,
            state,
            type,
            className,
            ...inputProps
        } = this.props;


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
                {this.props.children}
            </input>
        );
    }
}

