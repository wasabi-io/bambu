import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import { has } from "wasabi-common";
import Objects from "wasabi-common/lib/types/Objects";
import { State, StateValues } from "rebul/lib/base/css/state";
import HTMLComponent, { HTMLElementProps } from "rebul/lib/base/html/HTML";
import { Color, colorValues, Size, SizeValues } from "../../base/css";
import { default as Icon, IconOptions } from "../icon/Icon";
import ButtonStyle from "./ButtonStyle";

export enum BtnType {
    link = "link",
    button = "button",
    submit = "submit",
    reset = "reset",
}

export enum BtnStyle {
    outlined = "isOutlined",
    inverted = "isInverted",
}

export interface ButtonProps extends HTMLElementProps {
    buttonStyle?: string | BtnStyle;
    buttonType?: string | BtnType;
    color?: string | Color;
    icon?: IconOptions;
    size?: string | Size;
    state?: string | State;

    [key: string]: any;
}

export default class Button extends HTMLComponent<ButtonProps> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        buttonStyle: PropTypes.oneOf(Objects.values(BtnStyle)),
        buttonType: PropTypes.oneOf(Objects.values(BtnType)),
        color: PropTypes.oneOf(colorValues),
        size: PropTypes.oneOf(SizeValues),
        state: PropTypes.oneOf(StateValues),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        buttonType: BtnType.link,
    };

    public static createClass(buttonState: string | State,
        buttonStyle: string | BtnStyle,
        color: string | Color,
        size: string | Size,
        className: string) {
        return ClassNames([
            ButtonStyle.button,
            ButtonStyle[buttonState],
            ButtonStyle[buttonStyle],
            ButtonStyle[color],
            ButtonStyle[size],
            className,
        ]);
    }

    public static renderIcon(size: string | Size, icon: IconOptions) {
        if (!has(icon)) {
            return null;
        }
        return <Icon icon={icon} size={size} />;
    }

    public static renderButton(props: ButtonProps): JSX.Element {

        const { buttonType, icon, state, buttonStyle, color, size, className, ...inputProps } = props;

        const classNames = Button.createClass(state, buttonStyle, color, size, className);

        console.log(classNames);

        return (
            <button className={classNames} {...inputProps} >
                {Button.renderIcon(size, icon)}
                {props.children}
            </button>
        );
    }

    public static renderSubmit(props: ButtonProps): JSX.Element {

        const { buttonType, icon, state, buttonStyle, color, size, className, ...inputProps } = props;

        const classNames = Button.createClass(state, buttonStyle, color, size, className);

        return (
            <input type={buttonType + ""} className={classNames} {...inputProps} >
                {Button.renderIcon(size, icon)}
            </input>
        );
    }

    public static renderReset(props: ButtonProps): JSX.Element {

        const { buttonType, icon, state, buttonStyle, color, size, className, ...inputProps } = props;

        const classNames = Button.createClass(state, buttonStyle, color, size, className);

        return (
            <input type={buttonType + ""} className={classNames}  {...inputProps} >
                {Button.renderIcon(size, icon)}
            </input>
        );
    }

    public static renderLink(props: ButtonProps): JSX.Element {

        const { buttonType, icon, state, buttonStyle, color, size, className, ...inputProps } = props;

        const classNames = Button.createClass(state, buttonStyle, color, size, className);

        return (
            <a className={classNames} {...inputProps} >
                {Button.renderIcon(size, icon)}
                {props.children}
            </a>
        );
    }

    public render(): JSX.Element {
        switch (this.props.buttonType) {
            case BtnType.button:
                return Button.renderButton(this.props);
            case BtnType.submit:
                return Button.renderSubmit(this.props);
            case BtnType.reset:
                return Button.renderReset(this.props);
            default:
                return Button.renderLink(this.props);
        }
    }
}
