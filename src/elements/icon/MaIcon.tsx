import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {has, Objects, Strings} from 'wasabi-common';
import {HTMLAllAttributes} from '../../';
import HTMLComponent from '../../base/html/HTML';

export enum MaIconSize {
    is18px = "18px",
    is24px = "24px",
    is36px = "36px",
    is48px = "48px"
}

export const maIconSizeValues = Objects.values(MaIconSize);

export enum MaIconColor {
    light = "light",
    dark = "dark"
}

export const maIconColorValues = Objects.values(MaIconColor);

export enum MaIconFlip {
    horizontal = "flip-h",
    vertical = "flip-v",
}

export const maIconFlipValues = Objects.values(MaIconFlip);

/**
 * Refers MaIcon Props.
 */
export interface MaIconProps extends HTMLAllAttributes {
    name: string;
    color?: string | MaIconColor;
    bSize?: string | MaIconSize;
    inactive?: boolean;
    flip?: string | MaIconFlip;
    rotate?: 45 | 90 | 135 | 180 | 225 | 270 | 315;
    tagName?: string;
    elementRef?: (ref: any) => any;
}

/**
 * Material Icon
 * <i class="mdi mdi-bell" />
 * more https://materialdesignicons.com/
 */
export default class MaIcon extends HTMLComponent<MaIconProps> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        name: PropTypes.string.isRequired,
        color: PropTypes.oneOf(maIconColorValues),
        bSize: PropTypes.oneOf(maIconSizeValues),
        inactive: PropTypes.bool,
        flip: PropTypes.oneOf(maIconFlipValues),
        rotate: PropTypes.oneOf([45, 90, 135, 180, 225, 270, 315]),
        tagName: PropTypes.string
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        inactive: false,
        tagName: "i"
    };

    public render(): JSX.Element {
        const {
            name,
            color,
            bSize,
            inactive,
            flip,
            rotate,
            tagName,
            className,
            elementRef,
            children,
            ...props
        } = this.props;

        const icon = Strings.startsWith(name, "mdi-") ? name : `mdi-${name}`;

        const classNames = ClassNames(
            "mdi",
            icon,
            {
                [`mdi-${flip}`]: has(flip),
                [`mdi-${color}`]: has(color),
                [`mdi-${bSize}`]: has(bSize),
                "mdi-inactive": inactive,
                [`mdi-rotate-${rotate}`]: has(rotate),
            },
            className
        );
        return React.createElement(
            tagName,
            {
                className: classNames,
                ref: elementRef,
                ...props
            },
            children
        );
    }
}
