import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {has, Objects, Props, Strings} from 'wasabi-common';
import {Horizontal, horizontalValues} from '../../';
import HTMLComponent, {HTMLIProps} from '../../base/html/HTML';

export enum IconSize {
    isXs = 'xs',
    isSm = 'sm',
    isLg = 'lg',
    is2x = '2x',
    is3x = '3x',
    is4x = '4x',
    is5x = '5x',
    is6x = '6x',
    is7x = '7x',
    is8x = '8x',
    is9x = '9x',
    is10x = '10x'
}

export const iconSizeValues = Objects.values(IconSize);

export enum IconStyle {
    solid = "fas",
    regular = "far",
    light = "fal",
    brands = "fab"
}

export const iconStyleValues = Objects.values(IconStyle);

export enum IconFlip {
    horizontal = "horizontal",
    vertical = "vertical",
}

export const iconFlipValues = Objects.values(IconFlip);

export enum IconEffect { spin = 'spin', pulse = 'pulse' }

export const iconEffectValues = Objects.values(IconEffect);

export enum IconStack { x1 = '1x', x2 = '2x' }

export const iconStackValues = Objects.values(IconStack);

/**
 * Refers FaIcon Props.
 */
export interface FaIconProps extends HTMLIProps {
    ariaHidden?: boolean;
    border?: boolean;
    effect?: string | IconEffect;
    fixed?: boolean;
    flip?: string | IconFlip;
    iconStyle?: string | IconStyle;
    inverse?: boolean;
    name: string;
    pull?: string | Horizontal;
    rotate?: number;
    bSize?: string | IconSize;
    stack?: string | IconStack;
    elementRef?: (ref: any) => any;
}

/**
 * FaIcon component
 * <i class="fas fa-home fa-fw" style="background:MistyRose"></i>
 * more https://fontawesome.com/how-to-use/svg-with-js#additional-styling
 */
export default class FaIcon extends HTMLComponent<FaIconProps> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        iconStyle: PropTypes.oneOf(iconStyleValues),
        ariaHidden: PropTypes.bool,
        border: PropTypes.bool,
        effect: PropTypes.oneOf(iconEffectValues),
        fixed: PropTypes.bool,
        flip: PropTypes.oneOf(iconFlipValues),
        inverse: PropTypes.bool,
        name: PropTypes.string.isRequired,
        pull: PropTypes.oneOf(horizontalValues),
        rotate: PropTypes.number,
        bSize: PropTypes.oneOf(iconSizeValues),
        stack: PropTypes.oneOf(iconStackValues),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        ariaHidden: false,
        border: false,
        fixed: false,
        iconStyle: IconStyle.solid,
        inverse: false
    };

    public render(): JSX.Element {
        const {
            className,
            ariaHidden,
            border,
            effect,
            fixed,
            flip,
            iconStyle,
            inverse,
            name,
            pull,
            rotate,
            bSize,
            stack,
            elementRef,
            children,
            ...props,
        } = this.props;

        const icon = Strings.startsWith(name, "fa-") ? name : `fa-${name}`;

        const classNames = ClassNames(
            iconStyle,
            icon,
            {
                [`fa-flip-${flip}`]: Strings.has(flip),
                [`fa-pull-${pull}`]: Strings.has(pull),
                [`fa-rotate-${rotate}`]: has(rotate),
                [`fa-${bSize}`]: Strings.has(bSize),
                [`fa-stack-${stack}`]: Strings.has(stack),
                [`fa-${effect}`]: Strings.has(effect),
                'fa-border': border,
                'fa-fw': fixed,
                'fa-inverse': inverse
            },
            className
        );
        return (
            <i className={classNames} aria-hidden={ariaHidden} data-fa-transform={flip} {...props} ref={elementRef}>
                {children}
            </i>
        );
    }
}
