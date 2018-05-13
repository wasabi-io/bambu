import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';
import {bulma as ButtonStyle, Color, colorValues, HTMLComponent, HTMLElementProps, Size, sizeValues, State, stateValues} from '../../';
import Icon, {IconOptions} from '../icon/Icon';

export enum ButtonTagNames {
    a = 'a',
    button = 'button',
    input = 'input',
}

export interface ButtonProps extends HTMLElementProps {
    tagName?: ButtonTagNames | string;
    type?: string;
    value?: string;
    color?: string | Color;
    icon?: IconOptions;
    bSize?: string | Size;
    state?: string | State;
    isOutlined?: boolean;
    isInverted?: boolean;
    disabled?: boolean;
    isRounded?: boolean;
    onClick?: any;
}

const Button: React.SFC<ButtonProps> = (props: ButtonProps) => {
    const {
        tagName, isOutlined,
        isRounded, isInverted,
        icon, state, color, bSize,
        className, children,
        disabled, onClick, ...buttonProps,
    } = props;

    const classNames = ClassNames(
        ButtonStyle.button,
        ButtonStyle[state],
        ButtonStyle[color],
        ButtonStyle[bSize],
        {
            [`${ButtonStyle.isOutlined}`]: isOutlined,
            [`${ButtonStyle.isInverted}`]: isInverted,
            [`${ButtonStyle.isRounded}`]: isRounded,
        },
        className,
    );

    if (tagName === ButtonTagNames.input) {
        return React.createElement(tagName, {
            onClick,
            disabled,
            className: classNames,
            ...buttonProps,
        });
    }
    return React.createElement(tagName, {
        disabled,
        onClick: disabled ? null : onClick,
        className: classNames,
        ...buttonProps,
    }, icon && <Icon icon={icon} bSize={bSize}/>, children);
};

Button.propTypes = {
    ...HTMLComponent.propTypes,
    tagName: PropTypes.oneOf(Objects.values(ButtonTagNames)),
    color: PropTypes.oneOf(colorValues),
    bSize: PropTypes.oneOf(sizeValues),
    state: PropTypes.oneOf(stateValues),
};

Button.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'a',
};

Button.displayName = 'Button';

export default Button;
