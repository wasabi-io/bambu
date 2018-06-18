import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as IconStyle, HTMLComponent, HTMLSpanProps, Size, sizeValues} from '../../';
import {FaIconProps} from './FaIcon';

export type IconOptions = string | FaIconProps | JSX.Element;

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
}
