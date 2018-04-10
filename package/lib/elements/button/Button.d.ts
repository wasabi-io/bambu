/// <reference types="react" />
import * as React from 'react';
import { Color, Size, State } from '../../base/css';
import { HTMLElementProps } from '../../base/html/HTML';
import { IconOptions } from '../icon/Icon';
export declare enum ButtonTagNames {
    a = "a",
    button = "button",
    input = "input",
}
export interface ButtonProps extends HTMLElementProps {
    tagName?: ButtonTagNames | string;
    type?: string;
    value?: string;
    color?: string | Color;
    icon?: IconOptions;
    size?: string | Size;
    state?: string | State;
    isOutlined?: boolean;
    isInverted?: boolean;
    disabled?: boolean;
    isRounded?: boolean;
    onClick?: any;
}
declare const Button: React.SFC<ButtonProps>;
export default Button;
