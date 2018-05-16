import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects, Props} from 'wasabi-common';
import {bulma as ButtonStyle, Color, colorValues, HTMLAllAttributes, HTMLComponent, Size, sizeValues, State, stateValues} from '../../';
import Icon, {IconOptions} from '../icon/Icon';

export enum ButtonTagNames {
    a = 'a',
    button = 'button',
    input = 'input',
}

export interface ButtonProps extends HTMLAllAttributes {
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


export default class Button extends React.Component<ButtonProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.oneOf(Objects.values(ButtonTagNames)),
        color: PropTypes.oneOf(colorValues),
        bSize: PropTypes.oneOf(sizeValues),
        state: PropTypes.oneOf(stateValues),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'a',
    };

    public render(): JSX.Element {
        const {
            tagName, isOutlined,
            isRounded, isInverted,
            icon, state, color, bSize,
            className, children,
            disabled, onClick, ...buttonProps,
        } = this.props;

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
    }
}
