import * as ClassNames from 'classnames';
import 'font-awesome/css/font-awesome.css';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {has, Objects, Strings} from 'wasabi-common';
import {Horizontal, Orientation} from '../../base/css';
import HTMLComponent, {HTMLIProps} from '../../base/html/HTML';

export enum IconSize { lg = 'lg', x2 = '2x', x3 = '3x', x4 = '4x', x5 = '5x' }

export const IconSizeValues = Objects.values(IconSize);

export enum IconStack { x1 = 'x1', x2 = 'x2' }

export enum IconEffect { spin = 'spin', pulse = 'pulse' }

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

    public static propTypes = {
        ...HTMLComponent.propTypes,
        ariaHidden: PropTypes.bool,
        border: PropTypes.bool,
        effect: PropTypes.oneOf(Objects.values(IconEffect)),
        fixed: PropTypes.bool,
        flip: PropTypes.oneOf(Objects.values(Orientation)),
        inverse: PropTypes.bool,
        isList: PropTypes.bool,
        name: PropTypes.string.isRequired,
        pull: PropTypes.oneOf(Objects.values(Horizontal)),
        rotate: PropTypes.number,
        size: PropTypes.oneOf(Objects.values(IconSize)),
        stack: PropTypes.oneOf(Objects.values(IconStack)),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        ariaHidden: false,
        border: false,
        fixed: false,
        inverse: false,
        isList: false,
    };

    public static iconName(name: string) {
        if (!has(name)) {
            return '';
        }
        const prefix = name.substring(0, 3);
        switch (prefix) {
        case 'fa ':
            return name;
        case 'fa-':
            return 'fa ' + name;
        default:
            return 'fa fa-' + name;
        }
    }

    public static preEffect(effect: string) {
        return Strings.has(effect) ? `fa-${effect}` : undefined;
    }

    public static preFlip(flip: string | Orientation) {
        return has(flip) ? `fa-${flip}` : undefined;
    }

    public static prePull(pull: string | Horizontal) {
        return has(pull) ? `fa-pull-${pull}` : undefined;
    }

    public static preRotate(rotate: number) {
        return has(rotate) ? `fa-rotate-${rotate}` : undefined;
    }

    public static preSize(size: string) {
        return Strings.has(size) ? `fa-${size}` : undefined;
    }

    public static preStack(stack: string) {
        return Strings.has(stack) ? `fa-stack-${stack}` : undefined;
    }

    public render(): JSX.Element {
        const {
            className,
            ariaHidden,
            border,
            effect,
            fixed,
            flip,
            inverse,
            isList,
            name,
            pull,
            rotate,
            size,
            stack,
            ...props,
        } = this.props;

        const classNames = ClassNames(
            FaIcon.preEffect(effect),
            FaIcon.preFlip(flip),
            FaIcon.iconName(name),
            FaIcon.prePull(pull),
            FaIcon.preRotate(rotate),
            FaIcon.preSize(size),
            FaIcon.preStack(stack),
            {
                'fa-border': border,
                'fa-fw': fixed,
                'fa-inverse': inverse,
                'fa-li': isList,
            },
            className
        );
        return (
            <i
                className={classNames}
                aria-hidden={ariaHidden}
                {...props}
            />
        );
    }
}
