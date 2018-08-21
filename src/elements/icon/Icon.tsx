import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Alignment, bulma as IconStyle, HTMLComponent, HTMLSpanProps, Size, sizeValues, ComponentUtil} from '../../';
import FaIcon from './FaIcon';
import {has} from "wasabi-common";

export interface IconOptions {
    bSize?: string | Size;
    iconSize?: string;
    name: string;
    type?: string;

    [key: string]: any;
}

export type IconType = string | JSX.Element | IconOptions;

/**
 * Refers Icon Props.
 */
export interface IconProps extends HTMLSpanProps {
    iconClassName?: string;
    bSize?: string | Size;
    stack?: boolean;
    isLeft?: boolean;
    isRight?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Icon extends HTMLComponent<IconProps> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(sizeValues),
        stack: PropTypes.bool,
        iconClassName: PropTypes.string,
        isLeft: PropTypes.bool,
        isRight: PropTypes.bool
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render() {
        const {
            bSize,
            stack,
            iconClassName,
            isLeft,
            isRight,
            className,
            elementRef,
            children, ...props
        } = this.props;

        const classNames = ClassNames(
            IconStyle.icon,
            IconStyle[bSize],
            {
                [`${IconStyle.isLeft}`]: isLeft,
                [`${IconStyle.isRight}`]: isRight
            },
            className
        );

        const iconClassNames = ClassNames({"fa-stack": stack}, iconClassName);
        return (
            <span className={classNames} {...props} ref={elementRef}>
                <span className={iconClassNames}>
                {children}
                </span>
            </span>
        );
    }

    public static renderIcon(icon: IconType, alignment?: Alignment) {
        if (!has(icon)) {
            return null;
        }
        const classNames = alignment ? IconStyle[alignment] : null;

        if (typeof icon === "string") {
            return (
                <Icon className={classNames}>
                    <FaIcon name={icon}/>
                </Icon>
            );
        }

        if (ComponentUtil.isElement(icon)) {
            return (
                <Icon className={classNames}>
                    {icon}
                </Icon>
            );
        }

        const {type, bSize, ...props} = icon as IconOptions;
        return (
            <Icon className={IconStyle[alignment]} bSize={bSize}>
                <FaIcon {...props} />
            </Icon>
        );
    }
}
