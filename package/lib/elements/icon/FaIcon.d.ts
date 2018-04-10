/// <reference types="react" />
import 'font-awesome/css/font-awesome.css';
import * as PropTypes from 'prop-types';
import { Horizontal, Orientation } from '../../base/css';
import HTMLComponent, { HTMLIProps } from '../../base/html/HTML';
export declare enum IconSize {
    lg = "lg",
    x2 = "2x",
    x3 = "3x",
    x4 = "4x",
    x5 = "5x",
}
export declare const IconSizeValues: any[];
export declare enum IconStack {
    x1 = "x1",
    x2 = "x2",
}
export declare enum IconEffect {
    spin = "spin",
    pulse = "pulse",
}
export interface FaIconProps extends HTMLIProps {
    ariaHidden?: boolean;
    border?: boolean;
    effect?: string | IconEffect;
    fixed?: boolean;
    flip?: string | Orientation;
    inverse?: boolean;
    isList?: boolean;
    name: string;
    pull?: string | Horizontal;
    rotate?: number;
    size?: string | IconSize;
    stack?: string | IconStack;
    [key: string]: any;
}
export default class FaIcon extends HTMLComponent<FaIconProps> {
    static propTypes: {
        ariaHidden: PropTypes.Requireable<any>;
        border: PropTypes.Requireable<any>;
        effect: PropTypes.Requireable<any>;
        fixed: PropTypes.Requireable<any>;
        flip: PropTypes.Requireable<any>;
        inverse: PropTypes.Requireable<any>;
        isList: PropTypes.Requireable<any>;
        name: PropTypes.Validator<any>;
        pull: PropTypes.Requireable<any>;
        rotate: PropTypes.Requireable<any>;
        size: PropTypes.Requireable<any>;
        stack: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        ariaHidden: boolean;
        border: boolean;
        fixed: boolean;
        inverse: boolean;
        isList: boolean;
        className: string;
        style: {};
    };
    static iconName(name: string): string;
    static preEffect(effect: string): string;
    static preFlip(flip: string | Orientation): string;
    static prePull(pull: string | Horizontal): string;
    static preRotate(rotate: number): string;
    static preSize(size: string): string;
    static preStack(stack: string): string;
    render(): JSX.Element;
}
