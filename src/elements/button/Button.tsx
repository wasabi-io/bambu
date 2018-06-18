import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ButtonStyle, Color, colorValues, ComponentUtil, HTMLAllAttributes, HTMLComponent, Size, sizeValues, State, stateValues} from '../../';
import {FaIcon, FaIconProps, FaIconStyle, Icon} from '../icon';

export enum ButtonTags {
    a = 'a',
    button = 'button',
    input = 'input',
}

export interface ButtonProps extends HTMLAllAttributes {
    tagName?: ButtonTags | string;
    type?: string;
    value?: string;
    color?: string | Color;
    icon?: string | FaIconProps | JSX.Element;
    iconSize?: string | Size;
    iconStyle?: string | FaIconStyle;
    bSize?: string | Size;
    state?: string | State;
    isLink?: boolean;
    isText?: boolean;
    isFullwidth?: boolean;
    isOutlined?: boolean;
    isInverted?: boolean;
    isStatic?: boolean;
    disabled?: boolean;
    isRounded?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Button extends React.Component<ButtonProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.string,
        color: PropTypes.oneOf(colorValues),
        icon: PropTypes.oneOf([PropTypes.string, PropTypes.object, PropTypes.node]),
        iconSize: PropTypes.oneOf(sizeValues),
        bSize: PropTypes.oneOf(sizeValues),
        state: PropTypes.oneOf(stateValues),
        isLink: PropTypes.bool,
        isText: PropTypes.bool,
        isFullwidth: PropTypes.bool,
        isOutlined: PropTypes.bool,
        isInverted: PropTypes.bool,
        isStatic: PropTypes.bool,
        disabled: PropTypes.bool,
        isRounded: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {
            tagName, color, icon, iconSize, iconStyle, bSize, state, isLink, isText, isFullwidth, isOutlined,
            isInverted, isStatic, disabled, isRounded, elementRef, href, className, onClick, children, ...props
        } = this.props;

        const classNames = ClassNames(
            ButtonStyle.button,
            ButtonStyle[state],
            ButtonStyle[color],
            ButtonStyle[bSize],
            {
                [`${ButtonStyle.isLink}`]: isLink,
                [`${ButtonStyle.isText}`]: isText,
                [`${ButtonStyle.isFullwidth}`]: isFullwidth,
                [`${ButtonStyle.isOutlined}`]: isOutlined,
                [`${ButtonStyle.isInverted}`]: isInverted,
                [`${ButtonStyle.isStatic}`]: isStatic,
                [`${ButtonStyle.isRounded}`]: isRounded,
            },
            className,
        );

        const tag = tagName ? tagName : (href ? ButtonTags.a : ButtonTags.button);

        return React.createElement(tag, {
            href,
            disabled,
            onClick: disabled ? null : onClick,
            className: classNames,
            ref: elementRef,
            ...props,
        }, this.renderIcon(), children);
    }

    public renderIcon(): JSX.Element {
        if (!this.props.icon) {
            return null;
        }
        const icon: any = this.props.icon;
        let iconElement;
        if (ComponentUtil.isElement(icon)) {
            iconElement = icon;
        } else {
            iconElement = (typeof icon === "string" ?
                    <FaIcon name={icon} iconStyle={this.props.iconStyle}/> :
                    <FaIcon iconStyle={this.props.iconStyle} {...icon} />
            );
        }
        return (
            <Icon bSize={this.props.iconSize}>
                {iconElement}
            </Icon>
        );
    }
}
